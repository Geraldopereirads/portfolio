import { Module } from '@nestjs/common';
import { FrontEndService } from './frontEnd.service';
import { FrontEndController } from './frontEnd.controller';
import { FrontEndRepository } from './repositories/frontEnd.repository';
import { FrontEndInMemoryRepository } from './in-memorey/frontEnd.in-memory.repository';

@Module({
  controllers: [FrontEndController],
  providers: [FrontEndService,
    {
      provide: FrontEndRepository,
      useClass: FrontEndInMemoryRepository
    }
  ],
})
export class FrontEndModule { }
