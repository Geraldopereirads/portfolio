import { unlink } from 'node:fs';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { createFrontEndDto } from './Dto/create-frontEnd.dto';
import { UpdateFrontEndDto } from './Dto/update-frontEnd.dto';
import { FrontEndRepository } from './repositories/frontEnd.repository';

@Injectable()
export class FrontEndService {
  constructor(private frontEndRepository: FrontEndRepository) { }
  async create(createFrontEndDto: createFrontEndDto) {
    const findFrontEnd = await this.frontEndRepository.findByTitle(
      createFrontEndDto.title,
    );

    if (findFrontEnd) throw new ConflictException('Front-End already exists');

    const frontEnd = await this.frontEndRepository.create(createFrontEndDto);

    return frontEnd;
  }

  async find() {
    const frontEnd = await this.frontEndRepository.findAll();
    return frontEnd;
  }

  async findOne(id: string) {
    const frontEnd = await this.frontEndRepository.findOne(id);


    if (!frontEnd) throw new NotFoundException('Front-End not found !');

    return frontEnd;
  }

  async findByTitle(title: string) {
    const frontEnd = await this.frontEndRepository.findOne(title);

    if (!frontEnd) throw new NotFoundException('Title not found !');

    return frontEnd;
  }

  async update(data: UpdateFrontEndDto, id: string) {
    const frontEnd = this.frontEndRepository.update(data, id);

    if (!frontEnd) throw new NotFoundException('Front-End not found !');

    return frontEnd;
  }

  async upload(img?: Express.Multer.File, id?: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const findImage = await this.frontEndRepository.findOne(id);
    console.log(findImage)

    if (!findImage) throw new NotFoundException('Image not found');

    const uploadImage = await cloudinary.uploader.upload(
      img.path,
      { resource_type: 'image' },
      (error, result) => result,
    );

    const updateImage = await this.frontEndRepository.update(
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
    await this.frontEndRepository.remove(id);
  }
}
