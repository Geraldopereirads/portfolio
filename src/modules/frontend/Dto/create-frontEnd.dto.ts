import { IsString } from "class-validator"

export class createFrontEndDto {

  @IsString()
  title: string

  @IsString()
  img: string

  @IsString()
  urlVercel: string

  @IsString()
  github: string
}
