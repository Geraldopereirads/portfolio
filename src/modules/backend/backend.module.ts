import { Module } from '@nestjs/common';
import { BackendService } from './backend.service';
import { BackendController } from './backend.controller';
import { BackEndRepository } from './repositories/backEnd.repository';
import { backEndPrismaRepository } from './prisma/backend-prisma.repository';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [BackendController],
  providers: [BackendService, PrismaService,
    {
      provide: BackEndRepository,
      useClass: backEndPrismaRepository
    }
  ],
})
export class BackendModule { }
