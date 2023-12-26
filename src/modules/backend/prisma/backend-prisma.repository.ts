import { Injectable } from "@nestjs/common";
import { BackEndRepository } from "../repositories/backEnd.repository";
import { CreateBackendDto } from "../dto/create-backend.dto";
import { UpdateBackendDto } from "../dto/update-backend.dto";
import { Backend } from "../entities/backend.entity";
import { PrismaService } from "src/modules/database/prisma.service";
import { plainToInstance } from "class-transformer";


@Injectable()
export class backEndPrismaRepository implements BackEndRepository {
    constructor(private prisma: PrismaService) { }
    async create(data: CreateBackendDto): Promise<Backend> {
        const back = new Backend()
        Object.assign(back, { ...data })

        const newBackEnd = await this.prisma.backEnd.create({
            data: { ...back }
        })
        return plainToInstance(Backend, newBackEnd)

    }
    async findAll(): Promise<Backend[]> {
        const backs = await this.prisma.backEnd.findMany();
        return plainToInstance(Backend, backs)
    }
    async findByTitle(title: string): Promise<Backend> {
        const back = await this.prisma.backEnd.findUnique({
            where: { title }
        })

        return plainToInstance(Backend, back)
    }
    async findOne(id: string): Promise<Backend> {
        const back = await this.prisma.backEnd.findUnique({
            where: { id }
        })

        return plainToInstance(Backend, back)
    }
    async update(data: UpdateBackendDto, id: string): Promise<Backend> {
        const back = await this.prisma.backEnd.update({
            where: { id },
            data: { ...data }
        })

        return plainToInstance(Backend, back)
    }
    async remove(id: string): Promise<void> {
        await this.prisma.backEnd.delete({
            where: { id }
        })
    }

}