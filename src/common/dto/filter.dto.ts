import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsEnum, IsString } from 'class-validator';

export enum OrderBy {
  Name = 'title',
  Rating = 'rating',
  ReleaseDate = 'releaseDate',
}

export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}

export class AnimeFilterDto {
  @ApiPropertyOptional({
    default: '',
  })
  @Type(() => String)
  @IsString()
  @IsOptional()
  readonly query?: string = '';

  @ApiPropertyOptional({
    minimum: 1,
    maximum: 50,
    default: 10,
  })
  @IsEnum(OrderBy)
  @IsOptional()
  readonly orderBy?: OrderBy = OrderBy.Name;

  @ApiPropertyOptional({ enum: Order, default: Order.ASC })
  @IsEnum(Order)
  @IsOptional()
  readonly order?: Order = Order.DESC;
}
