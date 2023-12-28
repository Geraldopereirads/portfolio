import { Module } from '@nestjs/common';
import { FrontEndModule } from './modules/frontend/frontEnd.module';
import { BackendModule } from './modules/backend/backend.module';
import { FullstackModule } from './modules/fullstack/fullstack.module';
import { WordpressModule } from './modules/wordpress/wordpress.module';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [FrontEndModule, BackendModule, FullstackModule, WordpressModule, ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
