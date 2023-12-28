import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FrontEndService } from './frontEnd.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { createFrontEndDto } from './Dto/create-frontEnd.dto';
import { UpdateFrontEndDto } from './Dto/update-frontEnd.dto';

@ApiTags('Front-End')
@Controller('frontEnd')
export class FrontEndController {
  constructor(private readonly frontEndService: FrontEndService) { }
  @Post('')
  create(@Body() createFrontEndDto: createFrontEndDto) {
    return this.frontEndService.create(createFrontEndDto);
  }

  @Get()
  find() {
    return this.frontEndService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frontEndService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFrontEnd: UpdateFrontEndDto) {
    return this.frontEndService.update(updateFrontEnd, id);
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
    return this.frontEndService.upload(img[0], id)
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frontEndService.remove(id);
  }
}
