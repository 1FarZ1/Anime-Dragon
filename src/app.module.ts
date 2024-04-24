import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomLogger } from './utils/app.logger';
import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer } from '@nestjs/common';
import { AnimeModule } from './animes/anime.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AnimeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomLogger).forRoutes('*');
  }
}
