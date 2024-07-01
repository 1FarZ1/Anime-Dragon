import {
  Controller,
  Delete,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.gaurd';

@Controller('favorite')
@UseGuards(JwtAuthGuard)
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  // @Get('/user')
  // async getUserFavorites(@Req() req) {
  //   const userId = req.user.id;
  //   return this.favoriteService.getUserFavorites(userId);
  // }
  @Post(':animeId')
  async addToFavorites(@Param('animeId') animeId: number, @Req() req) {
    const userId = req.user.id;
    return await this.favoriteService.addToFavorites(userId, animeId);
  }

  @Delete(':animeId')
  async removeFromFavorites(@Param('animeId') animeId: number, @Req() req) {
    const userId = req.user.id;
    return await this.favoriteService.removeFromFavorites(userId, animeId);
  }
}
