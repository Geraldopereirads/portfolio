import { unlink } from 'node:fs';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
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

  async upload(img?: Express.Multer.File, id?: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const findImage = await this.fullStackRepository.findOne(id);

    console.log(findImage)

    if (!findImage) throw new NotFoundException('Image not found');

    const uploadImage = await cloudinary.uploader.upload(
      img.path,
      { resource_type: 'image' },
      (error, result) => result,
    );

    const updateImage = await this.fullStackRepository.update(
      {
        img: uploadImage.secure_url,
      },
      id,
    );

    unlink(img.path, (error) => {
      if (error) console.log(error);
    });

    return updateImage;
  }



  async remove(id: string) {
    await this.fullStackRepository.remove(id)
  }
}
