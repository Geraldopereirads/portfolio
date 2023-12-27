import { unlink } from 'node:fs';
import { v2 as cloudinary } from 'cloudinary';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsRepository } from './repositories/projects.repository';

@Injectable()
export class ProjectsService {
  constructor(private projectRepository: ProjectsRepository) { }
  async create(createProjectDto: CreateProjectDto) {
    const findProject = await this.projectRepository.findByTitle(createProjectDto.title)

    if (findProject) throw new ConflictException("Project already exists")

    const project = await this.projectRepository.create(createProjectDto)

    return project
  }

  async find() {
    const project = await this.projectRepository.findAll()
    return project
  }

  async findOne(id: string) {
    const project = await this.projectRepository.findOne(id)

    if (!project) throw new NotFoundException("Project not found !")

    return project
  }

  async update(data: UpdateProjectDto, id: string) {
    const project = this.projectRepository.update(data, id)

    if (!project) throw new NotFoundException("Project not found !")

    return project
  }


  async upload(img?: Express.Multer.File, id?: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const findImage = await this.projectRepository.findOne(id);

    if (!findImage) throw new NotFoundException('Image not found');

    const uploadImage = await cloudinary.uploader.upload(
      img.path,
      { resource_type: 'image' },
      (error, result) => result,
    );

    const updateImage = await this.projectRepository.update(
      {
        img: uploadImage.secure_url,
      },
      id,
    );

    unlink(img.path, (error) => {
      if (error) console.log(error);
    });

    return updateImage;
  }




  async remove(id: string) {
    await this.projectRepository.remove(id)
  }
}
