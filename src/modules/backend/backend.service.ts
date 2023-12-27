import { unlink } from 'node:fs';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBackendDto } from './dto/create-backend.dto';
import { UpdateBackendDto } from './dto/update-backend.dto';
import { BackEndRepository } from './repositories/backEnd.repository';
import { v2 as cloudinary } from 'cloudinary';



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

  async upload(img?: Express.Multer.File, id?: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const findImage = await this.backEndRepository.findOne(id);

    if (!findImage) throw new NotFoundException('Image not found');

    const uploadImage = await cloudinary.uploader.upload(
      img.path,
      { resource_type: 'image' },
      (error, result) => result,
    );

    const updateImage = await this.backEndRepository.update(
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
    await this.backEndRepository.remove(id)
  }
}
