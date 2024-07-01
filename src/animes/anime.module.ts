import { Module } from '@nestjs/common';
import { AnimeController } from './anime.controller';
import { EpisodesController } from './episodes.controller';
import { AnimeService } from './animes.service';
import { PrismaService } from 'src/db/prisma.service';
import { EpisodesService } from './episodes.service';
import { ReviewsService } from 'src/reviews/reviews.service';
import { ReviewsModule } from 'src/reviews/reviews.module';
import { FavoriteService } from 'src/favorites/favorite.service';
import { FavoriteModule } from 'src/favorites/favorite.module';
import { CollectionModule } from 'src/collection/collection.module';
import { CollectionService } from 'src/collection/collection.service';

@Module({
  imports: [ReviewsModule, FavoriteModule, CollectionModule],
  controllers: [AnimeController, EpisodesController],
  providers: [
    AnimeService,
    PrismaService,
    EpisodesService,
    ReviewsService,
    FavoriteService,
    CollectionService,
  ],
  exports: [AnimeService, ReviewsService],
})
export class AnimeModule {}
