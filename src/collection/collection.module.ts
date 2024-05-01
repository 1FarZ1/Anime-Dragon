import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { PrismaService } from 'src/db/prisma.service';
import { AnimeService } from 'src/animes/animes.service';
import { AnimeModule } from 'src/animes/anime.module';
import { ReviewsService } from 'src/reviews/reviews.service';

@Module({
  imports: [AnimeModule],
  controllers: [CollectionController],
  providers: [CollectionService, PrismaService, AnimeService, ReviewsService],
})
export class CollectionModule {}
