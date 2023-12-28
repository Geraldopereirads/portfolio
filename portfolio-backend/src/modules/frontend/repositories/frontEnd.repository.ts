/* eslint-disable prettier/prettier */
import { createFrontEndDto } from '../Dto/create-frontEnd.dto';
import { UpdateFrontEndDto } from '../Dto/update-frontEnd.dto';
import { FrontEnd } from '../entities/frontEnd.entitie';

export abstract class FrontEndRepository {
    abstract create(data: createFrontEndDto): Promise<FrontEnd>;
    abstract findAll(): Promise<FrontEnd[]>;
    abstract findByTitle(title: string): Promise<FrontEnd | null>;
    abstract findOne(id: string): Promise<FrontEnd | null>;
    abstract update(data: UpdateFrontEndDto, id: string): Promise<FrontEnd>;
    abstract remove(id: string): Promise<void>;
}
