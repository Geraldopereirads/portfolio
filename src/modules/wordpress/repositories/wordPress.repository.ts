import { CreateWordpressDto } from "../dto/create-wordpress.dto";
import { UpdateWordpressDto } from "../dto/update-wordpress.dto";
import { Wordpress } from "../entities/wordpress.entity";

export abstract class WordpressRepository {
    abstract create(data: CreateWordpressDto): Promise<Wordpress>
    abstract findAll(): Promise<Wordpress[]>
    abstract findByTitle(title: string): Promise<Wordpress | null>
    abstract findOne(id: string): Promise<Wordpress | null>
    abstract update(data: UpdateWordpressDto, id: string): Promise<Wordpress>
    abstract remove(id: string): Promise<void>
}