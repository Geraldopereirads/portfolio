import { Injectable } from '@nestjs/common';
import { CreateWordpressDto } from './dto/create-wordpress.dto';
import { UpdateWordpressDto } from './dto/update-wordpress.dto';

@Injectable()
export class WordpressService {
  create(createWordpressDto: CreateWordpressDto) {
    return 'This action adds a new wordpress';
  }

  findAll() {
    return `This action returns all wordpress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wordpress`;
  }

  update(id: number, updateWordpressDto: UpdateWordpressDto) {
    return `This action updates a #${id} wordpress`;
  }

  remove(id: number) {
    return `This action removes a #${id} wordpress`;
  }
}
