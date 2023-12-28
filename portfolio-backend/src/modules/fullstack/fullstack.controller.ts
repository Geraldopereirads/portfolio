import {
  UploadedFiles,
  UseInterceptors,
  Controller, Get, Post, Body, Patch, Param, Delete
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { FullstackService } from './fullstack.service';
import { CreateFullstackDto } from './dto/create-fullstack.dto';
import { UpdateFullstackDto } from './dto/update-fullstack.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("Full-Stack")
@Controller('fullstack')
export class FullstackController {
  constructor(private readonly fullstackService: FullstackService) { }

  @Post("")
  create(@Body() createFullstackDto: CreateFullstackDto) {
    return this.fullstackService.create(createFullstackDto);
  }

  @Get()
  find() {
    return this.fullstackService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {

    return this.fullstackService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFullstackDto: UpdateFullstackDto) {
    return this.fullstackService.update(updateFullstackDto, id);
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
    return this.fullstackService.upload(img[0], id)
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fullstackService.remove(id);
  }
}
