import { IsOptional, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"


export class CreateFullstackDto {

    @ApiProperty({
        description: "Projetos Full-Stack",
        type: String,
    })

    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    img: string | null

    @ApiProperty()
    @IsString()
    url: string

    @ApiProperty()
    @IsString()
    github: string

}
