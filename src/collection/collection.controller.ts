import {
  Controller,
  Delete,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CollectionService } from './collection.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.gaurd';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  // // get my collection
  // @Get('/me')
  // @UseGuards(JwtAuthGuard)
  // async getMyCollection(@Req() req) {
  //   const userId = req.user.id;
  //   return this.collectionService.getCollection(userId);
  // }
  // add to my collection
  @Post(':animeId')
  @UseGuards(JwtAuthGuard)
  async addToCollection(@Param('animeId') animeId: number, @Req() req) {
    const userId = req.user.id;
    return await this.collectionService.addToCollection(userId, animeId);
  }
  // remove from my collection
  @Delete(':animeId')
  @UseGuards(JwtAuthGuard)
  async removeFromCollection(@Param('animeId') animeId: number, @Req() req) {
    const userId = req.user.id;
    return await this.collectionService.removeFromCollection(userId, animeId);
  }
}
