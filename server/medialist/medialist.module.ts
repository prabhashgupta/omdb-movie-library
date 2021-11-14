import { Module } from '@nestjs/common';
import { MedialistService } from './medialist.service';
import { MedialistController } from './medialist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medialist } from './entities/medialist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medialist])],
  controllers: [MedialistController],
  providers: [MedialistService]
})
export class MedialistModule {}
