import { unlink } from 'node:fs';
import { v2 as cloudinary } from 'cloudinary';
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

  async upload(img?: Express.Multer.File, id?: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const findImage = await this.wordPressRepository.findOne(id);

    if (!findImage) throw new NotFoundException('Image not found');

    const uploadImage = await cloudinary.uploader.upload(
      img.path,
      { resource_type: 'image' },
      (error, result) => result,
    );

    const updateImage = await this.wordPressRepository.update(
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
    await this.wordPressRepository.remove(id)
  }
}
