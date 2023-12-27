/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FrontEndService } from './frontEnd.service';
import { FrontEndController } from './frontEnd.controller';
import { FrontEndRepository } from './repositories/frontEnd.repository';
import { frontEndPrismaRepository } from './prisma/frontEnd-prisma.repository';
import { PrismaService } from '../database/prisma.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './tmp',
        filename: (_, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  ],
  controllers: [FrontEndController],
  providers: [
    FrontEndService,
    PrismaService,
    {
      provide: FrontEndRepository,
      useClass: frontEndPrismaRepository,
    },
  ],
})
export class FrontEndModule { }
