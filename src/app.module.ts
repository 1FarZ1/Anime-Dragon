import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomLogger } from './utils/app.logger';
import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer } from '@nestjs/common';
import { AnimeModule } from './animes/anime.module';
// import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UsersModule } from './users/users.module';
import { CustomConfigModule } from './config/config.module';
import { ReviewsModule } from './reviews/reviews.module';
import { FavoriteModule } from './favorites/favorite.module';
import { CollectionModule } from './collection/collection.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // MikroOrmModule.forRoot(),
    AnimeModule,
    UsersModule,
    ConfigModule,
    ReviewsModule,
    FavoriteModule,
    AuthModule,
    CollectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomLogger).forRoutes('*');
  }
}
