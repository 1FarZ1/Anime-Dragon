import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.gaurd';
import { AddReviewDto } from './dto/add_rating.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/add')
  async addRating(@Body() addReviewDto: AddReviewDto, @Req() req) {
    const userId = req.user.id;
    return await this.reviewsService.addRating(userId, addReviewDto);
  }
}
