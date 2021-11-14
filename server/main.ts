import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3000, async () => {
    console.log(`Web Application is running on: http://localhost:3000/`);
    console.log(`API is running on: http://localhost:3000/api`);
  });
}
bootstrap();
