import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBackendDto } from './dto/create-backend.dto';
import { UpdateBackendDto } from './dto/update-backend.dto';
import { BackEndRepository } from './repositories/backEnd.repository';

@Injectable()
export class BackendService {
  constructor(private backEndRepository: BackEndRepository) { }
  async create(createBackendDto: CreateBackendDto) {
    const findBackEnd = await this.backEndRepository.findByTitle(createBackendDto.title)

    if (findBackEnd) throw new ConflictException("Back-End already exists")

    const backEnd = await this.backEndRepository.create(createBackendDto)

    return backEnd

  }

  async find() {
    const backEnd = await this.backEndRepository.findAll()
    return backEnd
  }

  async findOne(id: string) {
    const backEnd = await this.backEndRepository.findOne(id)

    if (!backEnd) throw new NotFoundException("Back-End not found !")

    return backEnd
  }

  async update(data: UpdateBackendDto, id: string) {
    const backEnd = this.backEndRepository.update(data, id)
    if (!backEnd) throw new NotFoundException("Back-End not found !")

    return backEnd
  }

  async remove(id: string) {
    await this.backEndRepository.remove(id)
  }
}
