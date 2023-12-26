import { IsOptional, IsString } from "class-validator"


export class CreateFullstackDto {
    @IsString()
    title: string

    @IsString()
    @IsOptional()
    img: string | null

    @IsString()
    url: string

    @IsString()
    github: string

}
