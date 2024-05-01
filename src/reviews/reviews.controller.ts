import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.gaurd';
import { AddRatingDto } from './dto/add_rating.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}
  // add rating only

  @UseGuards(JwtAuthGuard)
  @Post('/add')
  async addRating(@Body() addRatingDto: AddRatingDto, @Req() req) {
    const userId = req.user.id;
    return await this.reviewsService.addRating(userId, addRatingDto);
  }
}
