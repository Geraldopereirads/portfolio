import {
  UploadedFiles,
  UseInterceptors,
  Controller, Get, Post, Body, Patch, Param, Delete, HttpCode
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { WordpressService } from './wordpress.service';
import { CreateWordpressDto } from './dto/create-wordpress.dto';
import { UpdateWordpressDto } from './dto/update-wordpress.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("WordPress")
@Controller('wordpress')
export class WordpressController {
  constructor(private readonly wordpressService: WordpressService) { }

  @Post('')
  create(@Body() createWordpressDto: CreateWordpressDto) {
    return this.wordpressService.create(createWordpressDto);
  }

  @Get()
  find() {
    return this.wordpressService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wordpressService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWordpressDto: UpdateWordpressDto) {
    return this.wordpressService.update(id, updateWordpressDto);
  }


  @Patch('upload/:id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'img', maxCount: 1 }]))
  upload(
    @UploadedFiles()
    files: {
      img?: Express.Multer.File;
    },
    @Param('id') id: string,
  ) {
    const { img } = files;
    return this.wordpressService.upload(img[0], id)
  }



  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wordpressService.remove(id);
  }
}
