import { PartialType } from "@nestjs/mapped-types";
import { CreateProjectDto } from "src/modules/projects/dto/create-project.dto";

export class UpdateFrontEndDto extends PartialType(CreateProjectDto) { }