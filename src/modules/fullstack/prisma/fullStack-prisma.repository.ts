import { Injectable } from "@nestjs/common";
import { FullStackRepository } from "../repositories/fullStack.repository";
import { CreateFullstackDto } from "../dto/create-fullstack.dto";
import { UpdateFullstackDto } from "../dto/update-fullstack.dto";
import { Fullstack } from "../entities/fullstack.entity";
import { PrismaService } from "src/modules/database/prisma.service";
import { plainToInstance } from "class-transformer";


@Injectable()
export class fullStackPrismaRepository implements FullStackRepository {
    constructor(private prisma: PrismaService) { }
    async create(data: CreateFullstackDto): Promise<Fullstack> {
        const full = new Fullstack()
        Object.assign(full, { ...data })

        const newFullStack = await this.prisma.fullStack.create({
            data: { ...full }
        })

        return plainToInstance(Fullstack, newFullStack)
    }
    async findAll(): Promise<Fullstack[]> {
        const fullstacks = await this.prisma.fullStack.findMany()
        return plainToInstance(Fullstack, fullstacks);
    }
    async findByTitle(title: string): Promise<Fullstack> {
        const fullstacks = await this.prisma.fullStack.findUnique({
            where: { title }
        })

        return plainToInstance(Fullstack, fullstacks)
    }
    async findOne(id: string): Promise<Fullstack> {
        const fullstacks = await this.prisma.frontEnd.findUnique({
            where: { id }
        })

        return plainToInstance(Fullstack, fullstacks)
    }
    async update(data: UpdateFullstackDto, id: string): Promise<Fullstack> {
        const fullstacks = await this.prisma.fullStack.update({
            where: { id },
            data: { ...data }
        })

        return plainToInstance(Fullstack, fullstacks)
    }
    async remove(id: string): Promise<void> {
        await this.prisma.fullStack.delete({
            where: { id }
        })
    }

}