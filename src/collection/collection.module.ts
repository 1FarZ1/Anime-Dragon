import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  imports: [],
  controllers: [CollectionController],
  providers: [CollectionService, PrismaService],
  exports: [CollectionService],
})
export class CollectionModule {}
