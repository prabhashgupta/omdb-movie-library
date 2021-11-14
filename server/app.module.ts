import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { MedialistModule } from './medialist/medialist.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'sqlite',
      database: 'db',
      logging: true,
      synchronize: true,
      autoLoadEntities: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    MedialistModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
