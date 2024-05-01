import { Module } from '@nestjs/common';
import { AnimeController } from './anime.controller';
import { EpisodesController } from './episodes.controller';
import { AnimeService } from './animes.service';
import { PrismaService } from 'src/db/prisma.service';
import { EpisodesService } from './episodes.service';
import { ReviewsService } from 'src/reviews/reviews.service';
import { ReviewsModule } from 'src/reviews/reviews.module';

@Module({
  imports: [ReviewsModule],
  controllers: [AnimeController, EpisodesController],
  providers: [AnimeService, PrismaService, EpisodesService, ReviewsService],
  exports: [AnimeService],
})
export class AnimeModule {}
