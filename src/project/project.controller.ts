import {
  Body,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
  Controller,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectDto } from './dto/project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly blogService: ProjectService) {}

  @HttpCode(200)
  @Get()
  async getAllProjects() {
    return this.blogService.getAllProjects();
  }

  @HttpCode(200)
  @Get(':id')
  async getOneProject(@Param('id') id: string) {
    return this.blogService.getProjectById(id);
  }

  @HttpCode(201)
  @Post()
  @UsePipes(ValidationPipe)
  async createNewProject(@Body() dto: ProjectDto) {
    return this.blogService.createProject(dto);
  }

  @HttpCode(200)
  @Put(':id')
  async updateProject(@Param('id') id: string, @Body() dto: ProjectDto) {
    return this.blogService.updateProject(id, dto);
  }

  @HttpCode(200)
  @Delete(':id')
  async deleteProject(@Param('id') id: string) {
    return this.blogService.deleteProject(id);
  }
}
