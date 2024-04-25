import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AnimeService } from './animes.service';

@Controller('/animes')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Get('/')
  getAnimes() {
    return this.animeService.getAnimes();
  }

  @Get('/anime/:animeId')
  getAnime(@Param('animeId', ParseIntPipe) animeId: number) {
    return this.animeService.getAnime(animeId);
  }

  //   @Post('/add')
  //   addAnime(): string {
  //     return 'Anime added successfully';
  //   }
}
