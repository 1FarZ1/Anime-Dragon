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
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.gaurd';

@Controller('/animes')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Get('/')
  @UseGuards(OptionalAuthGuard)
  // @UseGuards(JwtAuthGuard)
  getAnimes(@Req() req) {
    return this.animeService.getAnimes(req.user);
  }

  @Get('/popular')
  getPopularAnimes() {
    return this.animeService.getPopularAnimes();
  }

  @Get('/search')
  @UseGuards(OptionalAuthGuard)
  searchAnimes(@Req() req, @Query() filterDto: AnimeFilterDto) {
    return this.animeService.searchAnimes(req.user, filterDto);
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
