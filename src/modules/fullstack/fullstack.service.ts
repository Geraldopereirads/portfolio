import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFullstackDto } from './dto/create-fullstack.dto';
import { UpdateFullstackDto } from './dto/update-fullstack.dto';
import { FullStackRepository } from './repositories/fullStack.repository';

@Injectable()
export class FullstackService {
  constructor(private fullStackRepository: FullStackRepository) { }
  async create(createFullstackDto: CreateFullstackDto) {
    const findFullStack = await this.fullStackRepository.findByTitle(createFullstackDto.title)
    if (findFullStack) throw new ConflictException("Full-Stack already exists")

    const fullStack = await this.fullStackRepository.create(createFullstackDto)

    return fullStack
  }

  async find() {
    const fullStack = await this.fullStackRepository.findAll()
    return fullStack
  }

  async findOne(id: string) {
    const fullStack = await this.fullStackRepository.findOne(id)

    if (!fullStack) throw new NotFoundException("Full-Stack not found !")

    return fullStack
  }

  async update(data: UpdateFullstackDto, id: string) {
    const fullStack = this.fullStackRepository.update(data, id)

    if (!fullStack) throw new NotFoundException("Full-Stack not found !")

    return fullStack
  }

  async remove(id: string) {
    await this.fullStackRepository.remove(id)
  }
}
