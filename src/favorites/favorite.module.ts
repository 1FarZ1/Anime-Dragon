import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { PrismaService } from 'src/db/prisma.service';
import { AnimeModule } from 'src/animes/anime.module';
import { AnimeService } from 'src/animes/animes.service';
import { ReviewsService } from 'src/reviews/reviews.service';
import { ReviewsModule } from 'src/reviews/reviews.module';

@Module({
  imports: [AnimeModule, ReviewsModule],
  controllers: [FavoriteController],
  providers: [FavoriteService, PrismaService, AnimeService, ReviewsService],
})
export class FavoriteModule {}
