import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { PrismaService } from '../database/prisma.service';
import { FullstackController } from './fullstack.controller';
import { FullstackService } from './fullstack.service';
import { fullStackPrismaRepository } from './prisma/fullStack-prisma.repository';
import { FullStackRepository } from './repositories/fullStack.repository';



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
  controllers: [FullstackController],
  providers: [
    FullstackService,
    PrismaService,
    {
      provide: FullStackRepository,
      useClass: fullStackPrismaRepository,
    },
  ],
})
export class FullstackModule { }
