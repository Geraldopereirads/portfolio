import { Module } from '@nestjs/common';
import { FullstackService } from './fullstack.service';
import { FullstackController } from './fullstack.controller';
import { PrismaService } from '../database/prisma.service';
import { FullStackRepository } from './repositories/fullStack.repository';
import { fullStackPrismaRepository } from './prisma/fullStack-prisma.repository';

@Module({
  controllers: [FullstackController],
  providers: [FullstackService, PrismaService,
    {
      provide: FullStackRepository,
      useClass: fullStackPrismaRepository
    }
  ],
})
export class FullstackModule { }
