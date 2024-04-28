import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';

@Module({
  controllers: [CollectionController],
  providers: [CollectionService],
})
export class CollectionModule {}
