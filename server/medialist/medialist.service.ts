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

        // const result = await axios.get(process.env.OMDBAPIURL, {
        //   params: {
        //     s: searchKey,
        //     apikey: process.env.APIKEY
        //   }
        // });
        const result = {
          data: {
            "Search": [
              {
                "Title": "Dill Mill Gayye",
                "Year": "2007–2010",
                "imdbID": "tt2366871",
                "Type": "series",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNmM5MjlkMDUtNzliZC00NGRjLThhMWMtMTk1YTc5YzFjYWY2XkEyXkFqcGdeQXVyNzM4MjU3NzY@._V1_SX300.jpg"
              },
              {
                "Title": "Dill Scallion",
                "Year": "1999",
                "imdbID": "tt0179769",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTQwNjg4MzI5MV5BMl5BanBnXkFtZTgwNTgxOTk1MDE@._V1_SX300.jpg"
              },
              {
                "Title": "Killer Dill",
                "Year": "1947",
                "imdbID": "tt0039530",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOGYzOTVlYTgtMzY2Mi00OTMxLThlMDQtMjZlZjlhMDkzNGVkXkEyXkFqcGdeQXVyMzI2MDEwNA@@._V1_SX300.jpg"
              },
              {
                "Title": "Kill Dill",
                "Year": "2005",
                "imdbID": "tt1455128",
                "Type": "movie",
                "Poster": "N/A"
              },
              {
                "Title": "Kya Dill Mein Hai",
                "Year": "2007–2008",
                "imdbID": "tt5102182",
                "Type": "series",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNTUwNzVhN2MtYTM3Yi00Y2NlLTk0YWQtNTEyNDliZDZkNmQwXkEyXkFqcGdeQXVyNzM4MjU3NzY@._V1_SX300.jpg"
              },
              {
                "Title": "Dill Flower",
                "Year": "2016",
                "imdbID": "tt5808156",
                "Type": "movie",
                "Poster": "N/A"
              },
              {
                "Title": "Sweet, Sour, Dill, and Everything in Between",
                "Year": "2016",
                "imdbID": "tt6987488",
                "Type": "movie",
                "Poster": "N/A"
              },
              {
                "Title": "The Insecurities of Dill",
                "Year": "2018",
                "imdbID": "tt7621584",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZDBlNDA1ZWQtMThiNS00OGFjLWIzZGEtYmI3YmY1ZWNiZTIyXkEyXkFqcGdeQXVyNDA0NDM2MDc@._V1_SX300.jpg"
              },
              {
                "Title": "Dill",
                "Year": "2017",
                "imdbID": "tt8091470",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTQzODdjOGYtNmY4Ni00MWNlLTk5NmYtM2FkNWFjOTAyOGI0XkEyXkFqcGdeQXVyMjYxNjY4Njc@._V1_SX300.jpg"
              },
              {
                "Title": "Pill & Dill",
                "Year": "2014",
                "imdbID": "tt10313526",
                "Type": "series",
                "Poster": "N/A"
              }
            ],
            "totalResults": "15",
            "Response": "True"
          }
        }

        if (result && result.data && result.data.Search && result.data.Search.length) {
          const res = await this.create(result.data.Search);
          return res;
        }

        return [];
      }

    } catch (error) {

    }
  }
}
