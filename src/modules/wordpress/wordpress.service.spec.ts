import { Test, TestingModule } from '@nestjs/testing';
import { WordpressService } from './wordpress.service';

describe('WordpressService', () => {
  let service: WordpressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WordpressService],
    }).compile();

    service = module.get<WordpressService>(WordpressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
