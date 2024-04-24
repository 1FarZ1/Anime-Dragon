import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app: any = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.enableCors({
    origin: '*',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Anime Slayer Clone API')
    .setDescription(
      'The Anime Slayer API , for the Anime Slayer App , used to stream anime videos',
    )
    .setVersion('1.0')
    .addTag('nestjs')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(5500);
}
bootstrap();
