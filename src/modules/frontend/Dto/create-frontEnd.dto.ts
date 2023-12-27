/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class createFrontEndDto {
  @ApiProperty({
    description: 'Projetos Front-End',
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  img: string | null;

  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsString()
  github: string;
}
