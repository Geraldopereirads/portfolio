import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { PrismaService } from '../database/prisma.service';
import { ProjectsRepository } from './repositories/projects.repository';
import { projectPrismarepository } from './prisma/project-prisma.repository';
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
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService,
    {
      provide: ProjectsRepository,
      useClass: projectPrismarepository
    }
  ],
})
export class ProjectsModule { }
