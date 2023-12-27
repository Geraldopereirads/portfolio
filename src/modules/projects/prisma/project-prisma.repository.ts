import { Injectable } from "@nestjs/common";
import { ProjectsRepository } from "../repositories/projects.repository";
import { UpdateBackendDto } from "src/modules/backend/dto/update-backend.dto";
import { CreateProjectDto } from "../dto/create-project.dto";
import { Project } from "../entities/project.entity";
import { PrismaService } from "src/modules/database/prisma.service";
import { plainToInstance } from "class-transformer";




@Injectable()
export class projectPrismarepository implements ProjectsRepository {
    constructor(private prisma: PrismaService) { }
    async create(data: CreateProjectDto): Promise<Project> {
        const project = new Project()
        Object.assign(project, { ...data })

        const newProject = await this.prisma.project.create({
            data: { ...project }
        })

        return plainToInstance(Project, newProject)
    }
    async findAll(): Promise<Project[]> {
        const projects = await this.prisma.project.findMany()

        return plainToInstance(Project, projects)
    }
    async findByTitle(title: string): Promise<Project> {
        const project = await this.prisma.project.findUnique({
            where: { title }
        })

        return plainToInstance(Project, project)
    }
    async findOne(id: string): Promise<Project> {
        const project = await this.prisma.project.findUnique({
            where: { id }
        })

        return plainToInstance(Project, project)
    }
    async update(data: UpdateBackendDto, id: string): Promise<Project> {
        const project = await this.prisma.project.update({
            where: { id },
            data: { ...data }
        })

        return project
    }
    async remove(id: string): Promise<void> {
        await this.prisma.project.delete({
            where: { id }
        })
    }

}