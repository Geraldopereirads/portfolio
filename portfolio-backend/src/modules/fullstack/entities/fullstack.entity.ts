import { randomUUID } from 'crypto';


export class Fullstack {
    readonly id: string;
    title: string;
    img: string | null;
    url: string;
    github: string;

    constructor() {
        this.id = randomUUID();
    }

}
