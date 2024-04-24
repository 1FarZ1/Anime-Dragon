import { Controller, Get, Post } from '@nestjs/common';

@Controller('/episodes')
export class EpisodesController {
  constructor() {}

  @Get('/')
  getEpisodes(): string[] {
    return ['Episode 1', 'Episode 2', 'Episode 3'];
  }

  @Post('/add')
  addEpisode(): string {
    return 'Episode added successfully';
  }
}
