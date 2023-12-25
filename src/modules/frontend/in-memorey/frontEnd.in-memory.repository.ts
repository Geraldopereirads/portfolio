import { Injectable } from "@nestjs/common";
import { createFrontEndDto } from "../Dto/create-frontEnd.dto";
import { FrontEnd } from "../entities/frontEnd.entitie";
import { FrontEndRepository } from "../repositories/frontEnd.repository";
import { UpdateFrontEndDto } from "../Dto/update-frontEnd.dto";

@Injectable()
export class FrontEndInMemoryRepository implements FrontEndRepository {
    private database: FrontEnd[] = []
    async create(data: createFrontEndDto): Promise<FrontEnd> {
        const newFrontEnd = new FrontEnd()
        Object.assign(newFrontEnd, { ...data })

        this.database.push(newFrontEnd)

        return newFrontEnd
    }
    async findAll(): Promise<FrontEnd[]> {
        return this.database
    }

    async findByTitle(title: string): Promise<FrontEnd> {
        const frontEnd = this.database.find(front => front.title === title)

        return frontEnd

    }

    async findOne(id: string): Promise<FrontEnd> {
        const frontEnd = this.database.find((front) => front.id === id)
        return frontEnd
    }


    async update(data: UpdateFrontEndDto, id: string): Promise<FrontEnd> {
        const frontIndex = this.database.findIndex((front) => front.id === id)
        this.database[frontIndex] = {
            ...this.database[frontIndex],
            ...data
        }
        return this.database[frontIndex]

    }
    async remove(id: string): Promise<void> {
        const frontIndex = this.database.findIndex((front) => front.id === id)

        this.database.splice(frontIndex, 1)
    }



}