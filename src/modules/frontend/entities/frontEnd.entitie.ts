import { randomUUID } from 'crypto';

export class FrontEnd {
  readonly id: string;
  title: string;
  img: string;
  urlVercel: string;
  github: string;

  constructor() {
    this.id = randomUUID();
  }
}
