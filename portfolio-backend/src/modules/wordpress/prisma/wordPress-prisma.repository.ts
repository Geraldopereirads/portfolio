import { Injectable } from "@nestjs/common";
import { WordpressRepository } from "../repositories/wordPress.repository";
import { CreateWordpressDto } from "../dto/create-wordpress.dto";
import { UpdateWordpressDto } from "../dto/update-wordpress.dto";
import { Wordpress } from "../entities/wordpress.entity";
import { PrismaService } from "src/modules/database/prisma.service";
import { plainToInstance } from "class-transformer";





@Injectable()
export class wordPressPrismaRepository implements WordpressRepository {
    constructor(private prisma: PrismaService) { }
    async create(data: CreateWordpressDto): Promise<Wordpress> {
        const wordpress = new Wordpress()
        Object.assign(wordpress, { ...data })

        const newWordPress = await this.prisma.wordPress.create({
            data: { ...wordpress }
        })

        return plainToInstance(Wordpress, newWordPress)
    }
    async findAll(): Promise<Wordpress[]> {
        const wordpress = await this.prisma.wordPress.findMany()
        return plainToInstance(Wordpress, wordpress);
    }
    async findByTitle(title: string): Promise<Wordpress> {
        const wordpress = await this.prisma.wordPress.findUnique({
            where: { title }
        })

        return plainToInstance(Wordpress, wordpress)
    }
    async findOne(id: string): Promise<Wordpress> {
        const wordpress = await this.prisma.wordPress.findUnique({
            where: { id }
        })

        return plainToInstance(Wordpress, wordpress)
    }
    async update(data: UpdateWordpressDto, id: string): Promise<Wordpress> {
        const wordpress = await this.prisma.wordPress.update({
            where: { id },
            data: { ...data }
        })

        return plainToInstance(Wordpress, wordpress)
    }
    async remove(id: string): Promise<void> {
        await this.prisma.wordPress.delete({
            where: { id }
        })
    }

}