import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateWordpressDto } from './dto/create-wordpress.dto';
import { UpdateWordpressDto } from './dto/update-wordpress.dto';
import { WordpressRepository } from './repositories/wordPress.repository';

@Injectable()
export class WordpressService {
  constructor(private wordPressRepository: WordpressRepository) { }
  async create(createWordpressDto: CreateWordpressDto) {
    const findWordPress = await this.wordPressRepository.findByTitle(createWordpressDto.title)

    if (findWordPress) throw new ConflictException("Word-Press already exists")

    const wordpress = await this.wordPressRepository.create(createWordpressDto)

    return wordpress
  }

  async find() {
    const wordpress = await this.wordPressRepository.findAll()

    return wordpress
  }

  async findOne(id: string) {
    const wordpress = await this.wordPressRepository.findOne(id)

    if (!wordpress) throw new NotFoundException("Word-Press not found !")

    return wordpress
  }

  async update(id: string, data: UpdateWordpressDto) {
    const wordPress = this.wordPressRepository.update(data, id)

    if (!wordPress) throw new NotFoundException("Word-Press not found !")

    return wordPress
  }

  async remove(id: string) {
    await this.wordPressRepository.remove(id)
  }
}
