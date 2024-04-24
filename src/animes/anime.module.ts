import { Module } from '@nestjs/common';
import { AnimeController } from './anime.controller';
import { EpisodesController } from './episodes.controller';

@Module({
  imports: [],
  controllers: [AnimeController, EpisodesController],
  providers: [],
})
export class AnimeModule {}
