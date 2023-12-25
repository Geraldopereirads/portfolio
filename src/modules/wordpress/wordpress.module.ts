import { Module } from '@nestjs/common';
import { WordpressService } from './wordpress.service';
import { WordpressController } from './wordpress.controller';

@Module({
  controllers: [WordpressController],
  providers: [WordpressService],
})
export class WordpressModule {}
