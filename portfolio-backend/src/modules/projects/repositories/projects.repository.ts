import { UpdateBackendDto } from "src/modules/backend/dto/update-backend.dto";
import { CreateProjectDto } from "../dto/create-project.dto";
import { Project } from "../entities/project.entity";

export abstract class ProjectsRepository {
    abstract create(data: CreateProjectDto): Promise<Project>
    abstract findAll(): Promise<Project[]>
    abstract findByTitle(title: string): Promise<Project | null>
    abstract findOne(id: string): Promise<Project | null>
    abstract update(data: UpdateBackendDto, id: string): Promise<Project>
    abstract remove(id: string): Promise<void>
}