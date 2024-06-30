import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AnimeService } from './animes.service';
import { AnimeFilterDto } from 'src/common/dto/filter.dto';
import { OptionalAuthGuard } from 'src/auth/guards/optiona-auth.gaurd';

@Controller('/animes')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Get('/')
  @UseGuards(OptionalAuthGuard)
  getAnimes(@Req() req) {
    return req.user
      ? this.animeService.getAnimes()
      : this.animeService.getAnimes();
  }

  @Get('/popular')
  getPopularAnimes() {
    return this.animeService.getPopularAnimes();
  }

  @Get('/search')
  searchAnimes(@Query() filterDto: AnimeFilterDto) {
    return this.animeService.searchAnimes(filterDto);
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
