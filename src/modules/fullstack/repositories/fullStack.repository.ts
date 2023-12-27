import { FullStack } from "@prisma/client";
import { CreateFullstackDto } from "../dto/create-fullstack.dto";
import { Fullstack } from "../entities/fullstack.entity";
import { UpdateFullstackDto } from "../dto/update-fullstack.dto";

export abstract class FullStackRepository {
    abstract create(data: CreateFullstackDto): Promise<Fullstack>
    abstract findAll(): Promise<FullStack[]>
    abstract findByTitle(title: string): Promise<FullStack | null>
    abstract findOne(id: string): Promise<FullStack | null>;
    abstract update(data: UpdateFullstackDto, id: string): Promise<FullStack>
    abstract remove(id: string): Promise<void>
}