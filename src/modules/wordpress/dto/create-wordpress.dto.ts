import { IsOptional, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"


export class CreateWordpressDto {
    @ApiProperty({
        description: "Projetos WordPress",
        type: String,
    })
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
