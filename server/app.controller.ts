import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('movie-search')
  async getMovie(@Query('movieSearchCategory') movieSearchCategory: string, @Query('movieSearchKey') movieSearchKey: string) {
    return await this.appService.getResult(movieSearchKey);
    // return this.appService.getResult();
  }
}
