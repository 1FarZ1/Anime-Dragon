import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AnimeService } from './animes.service';
import { AnimeFilterDto } from 'src/common/dto/filter.dto';

@Controller('/animes')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Get('/')
  getAnimes() {
    return this.animeService.getAnimes();
  }

  @Get('/popular')
  getPopularAnimes() {
    return this.animeService.getPopularAnimes();
  }

  @Get('/search')
  searchAnimes(@Query() filterDto: AnimeFilterDto) {
    return this.animeService.getAnimesSearch(
      filterDto.query,
      filterDto.orderBy,
      filterDto.order,
    );
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
