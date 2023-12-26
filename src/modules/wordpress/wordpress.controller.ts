import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { WordpressService } from './wordpress.service';
import { CreateWordpressDto } from './dto/create-wordpress.dto';
import { UpdateWordpressDto } from './dto/update-wordpress.dto';

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


  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wordpressService.remove(id);
  }
}
