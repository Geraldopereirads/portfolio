import { Injectable } from "@nestjs/common";
import { createFrontEndDto } from "../Dto/create-frontEnd.dto";
import { UpdateFrontEndDto } from "../Dto/update-frontEnd.dto";
import { FrontEnd } from "../entities/frontEnd.entitie";
import { FrontEndRepository } from "../repositories/frontEnd.repository";
import { PrismaService } from "src/modules/database/prisma.service";
import { plainToInstance } from "class-transformer";

@Injectable()
export class frontEndPrismaRepository implements FrontEndRepository {
    constructor(private prisma: PrismaService) { }
    async create(data: createFrontEndDto): Promise<FrontEnd> {
        const front = new FrontEnd()
        Object.assign(front, { ...data })

        const newFrontEnd = await this.prisma.frontEnd.create({
            data: { ...front }
        })

        return plainToInstance(FrontEnd, newFrontEnd)

    }


    async findAll(): Promise<FrontEnd[]> {
        const fronts = await this.prisma.frontEnd.findMany();
        return fronts
    }


    async findByTitle(title: string): Promise<FrontEnd> {
        const front = await this.prisma.frontEnd.findUnique({
            where: { title }
        })

        return front
    }


    async findOne(id: string): Promise<FrontEnd> {
        const front = await this.prisma.frontEnd.findUnique({
            where: { id }
        })

        return plainToInstance(FrontEnd, front)
    }


    async update(data: UpdateFrontEndDto, id: string): Promise<FrontEnd> {
        const front = await this.prisma.frontEnd.update({
            where: { id },
            data: { ...data }
        })

        return plainToInstance(FrontEnd, front)
    }


    async remove(id: string): Promise<void> {
        await this.prisma.frontEnd.delete({
            where: { id }
        })
    }

}