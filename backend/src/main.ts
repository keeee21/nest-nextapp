import { NestFactory } from '@nestjs/core';

import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.userGlobalPipes(new ValidationPipe({ whitelist : true}));
  app.enableCors({
    Credentials : true,
    origin: ['http://localhost:3000'],
  });
  app.use(cookieParser());
  await app.listen(3005);
}
bootstrap();
