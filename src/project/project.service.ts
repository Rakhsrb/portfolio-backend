import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project, ProjectDocument } from './project.schema';
import { ProjectDto } from './dto/project.dto';
import { Model } from 'mongoose';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  async getAllProjects() {
    return this.projectModel.find().exec();
  }

  async getProjectById(id: string) {
    const blog = await this.projectModel.findById(id).exec();
    if (!blog) throw new NotFoundException('Project not found');
    return blog;
  }

  async createProject(dto: ProjectDto) {
    return this.projectModel.create(dto);
  }

  async updateProject(id: string, dto: ProjectDto) {
    const updatedBlog = await this.projectModel
      .findByIdAndUpdate(id, dto, {
        new: true,
      })
      .exec();

    if (!updatedBlog) throw new NotFoundException('Project not found');
    return updatedBlog;
  }

  async deleteProject(id: string) {
    const deletedBlog = await this.projectModel.findByIdAndDelete(id).exec();
    if (!deletedBlog) throw new NotFoundException('Project not found');
    return { message: 'Blog deleted successfully' };
  }
}
