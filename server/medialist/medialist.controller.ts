import { Controller, Get, Query } from '@nestjs/common';
import { MedialistService } from './medialist.service';

@Controller('medialist')
export class MedialistController {
  constructor(private readonly medialistService: MedialistService) {}

  @Get('movie-search')
  async getMovie(@Query('movieSearchKey') movieSearchKey: string, @Query('movieSearchCategory') movieSearchCategory: string) {
    return await this.medialistService.getResult(movieSearchKey);
  }
}
