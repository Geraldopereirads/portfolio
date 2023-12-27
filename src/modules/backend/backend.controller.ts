import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { BackendService } from './backend.service';
import { CreateBackendDto } from './dto/create-backend.dto';
import { UpdateBackendDto } from './dto/update-backend.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("Back-End")
@Controller('backend')
export class BackendController {
  constructor(private readonly backendService: BackendService) { }

  @Post('')
  create(@Body() createBackendDto: CreateBackendDto) {
    return this.backendService.create(createBackendDto);
  }

  @Get()
  find() {
    return this.backendService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backendService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBackend: UpdateBackendDto) {
    return this.backendService.update(updateBackend, id);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backendService.remove(id);
  }
}
