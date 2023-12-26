import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { PrismaService } from '../database/prisma.service';
import { ProjectsRepository } from './repositories/projects.repository';
import { projectPrismarepository } from './prisma/project-prisma.repository';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService,
    {
      provide: ProjectsRepository,
      useClass: projectPrismarepository
    }
  ],
})
export class ProjectsModule { }
