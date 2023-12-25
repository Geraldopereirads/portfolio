import { Test, TestingModule } from '@nestjs/testing';
import { WordpressController } from './wordpress.controller';
import { WordpressService } from './wordpress.service';

describe('WordpressController', () => {
  let controller: WordpressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WordpressController],
      providers: [WordpressService],
    }).compile();

    controller = module.get<WordpressController>(WordpressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
