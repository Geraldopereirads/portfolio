import { randomUUID } from 'crypto';

export class Backend {
    readonly id: string;
    title: string;
    img: string | null;
    url: string;
    github: string;


    constructor() {
        this.id = randomUUID();
    }

}
