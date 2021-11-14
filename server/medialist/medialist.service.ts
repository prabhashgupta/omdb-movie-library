import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Like, Repository } from 'typeorm';
import { CreateMedialistDto } from './dto/create-medialist.dto';
import { Medialist } from './entities/medialist.entity';

@Injectable()
export class MedialistService {
  constructor(
    @InjectRepository(Medialist)
    private readonly mediaRepository: Repository<Medialist>,
  ) {}

  create(createMedialistDto: CreateMedialistDto[]): Promise<Medialist[]> {
    let mediaArr: Medialist[] = [];
    for (let i = 0; i < createMedialistDto.length; i++) {
      const media = new Medialist();
      media.imdbID = createMedialistDto[i].imdbID;
      media.title = createMedialistDto[i].Title;
      media.year = createMedialistDto[i].Year;
      media.type = createMedialistDto[i].Type;
      media.poster = createMedialistDto[i].Poster;
      mediaArr.push(media);
    }
    
    return this.mediaRepository.save(mediaArr);
  }

  async findByTitle(searchStr: string): Promise<Medialist[]> {
    return await this.mediaRepository.find({where: {title: Like(searchStr)}});
  }

  async getResult (searchKey: string) {
    try {
      const res = await this.findByTitle(searchKey);
      if (res.length > 0) {
        return res;
      } else {
        console.log(process.env.OMDBAPIURL);
        const result = await axios.get(process.env.OMDBAPIURL, {
          params: {
            s: searchKey,
            apikey: process.env.APIKEY
          }
        });
        
        if (result && result.data && result.data.Search && result.data.Search.length) {
          const res = await this.create(result.data.Search);
          return res;
        }

        return [];
      }

    } catch (error) {
      throw new Error("Error: MedialistService" + error.message);

    }
  }
}
