import { Controller, Get, Post } from '@nestjs/common';

@Controller('/animes')
export class AnimeController {
  constructor() {}

  @Get('/')
  getAnimes(): string[] {
    return ['Naruto', 'One Piece', 'Bleach'];
  }

  @Post('/add')
  addAnime(): string {
    return 'Anime added successfully';
  }
}
