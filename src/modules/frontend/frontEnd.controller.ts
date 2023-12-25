import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { FrontEndService } from './frontEnd.service';
import { createFrontEndDto } from './Dto/create-frontEnd.dto';
import { UpdateFrontEndDto } from './Dto/update-frontEnd.dto';

@Controller('frontEnd')
export class FrontEndController {
  constructor(private readonly frontEndService: FrontEndService) { }
  @Post('')
  create(@Body() createFrontEndDto: createFrontEndDto) {
    return this.frontEndService.create(createFrontEndDto);
  }

  @Get()
  find() {
    return this.frontEndService.find()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.frontEndService.findOne(id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateFrontEnd: UpdateFrontEndDto) {
    return this.frontEndService.update(updateFrontEnd, id)
  }

  @HttpCode(204)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.frontEndService.remove(id)
  }

}
