import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { createFrontEndDto } from './Dto/create-frontEnd.dto';
import { FrontEndRepository } from './repositories/frontEnd.repository';
import { UpdateFrontEndDto } from './Dto/update-frontEnd.dto';

@Injectable()
export class FrontEndService {
  constructor(private frontEndRepository: FrontEndRepository) { }
  async create(createFrontEndDto: createFrontEndDto) {
    const findFrontEnd = await this.frontEndRepository.findByTitle(createFrontEndDto.title)


    if (findFrontEnd) throw new ConflictException("Front-End already exists")

    const frontEnd = await this.frontEndRepository.create(createFrontEndDto)

    return frontEnd
  }

  async find() {
    const frontEnd = await this.frontEndRepository.findAll()
    return frontEnd
  }

  async findOne(id: string) {
    const frontEnd = await this.frontEndRepository.findOne(id)

    if (!frontEnd) throw new NotFoundException("Front-End not found !")


    return frontEnd
  }


  async update(data: UpdateFrontEndDto, id: string) {
    const frontEnd = this.frontEndRepository.update(data, id)

    if (!frontEnd) throw new NotFoundException("Front-End not found !")

    return frontEnd;
  }

  async remove(id: string) {
    await this.frontEndRepository.remove(id)
  }

}
