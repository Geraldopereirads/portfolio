import { Module } from '@nestjs/common';
import { WordpressService } from './wordpress.service';
import { WordpressController } from './wordpress.controller';
import { PrismaService } from '../database/prisma.service';
import { WordpressRepository } from './repositories/wordPress.repository';
import { wordPressPrismaRepository } from './prisma/wordPress-prisma.repository';
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

  controllers: [WordpressController],
  providers: [WordpressService, PrismaService,

    {
      provide: WordpressRepository,
      useClass: wordPressPrismaRepository
    }

  ],
})
export class WordpressModule { }
