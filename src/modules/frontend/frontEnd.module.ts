import { Module } from '@nestjs/common';
import { FrontEndService } from './frontEnd.service';
import { FrontEndController } from './frontEnd.controller';
import { FrontEndRepository } from './repositories/frontEnd.repository';
import { frontEndPrismaRepository } from './prisma/frontEnd-prisma.repository';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [FrontEndController],
  providers: [FrontEndService, PrismaService,
    {
      provide: FrontEndRepository,
      useClass: frontEndPrismaRepository
    },
  ],
})
export class FrontEndModule { }
