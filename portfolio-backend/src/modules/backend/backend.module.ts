import { Module } from '@nestjs/common';
import { BackendService } from './backend.service';
import { BackendController } from './backend.controller';
import { BackEndRepository } from './repositories/backEnd.repository';
import { backEndPrismaRepository } from './prisma/backend-prisma.repository';
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

  controllers: [BackendController],
  providers: [BackendService, PrismaService,
    {
      provide: BackEndRepository,
      useClass: backEndPrismaRepository
    }
  ],
})
export class BackendModule { }
