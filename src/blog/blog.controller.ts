import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogDto } from './dto/blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @HttpCode(200)
  @Get()
  async getAll() {
    return this.blogService.getAllBlogs();
  }

  @HttpCode(200)
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.blogService.getBlogById(id);
  }

  @HttpCode(201)
  @Post()
  @UsePipes(ValidationPipe)
  async createNewBlog(@Body() dto: BlogDto) {
    return this.blogService.createBlog(dto);
  }

  @HttpCode(200)
  @Put(':id')
  async updateBlog(@Param('id') id: string, @Body() dto: BlogDto) {
    return this.blogService.updateBlog(id, dto);
  }

  @HttpCode(200)
  @Delete(':id')
  async deleteBlog(@Param('id') id: string) {
    return this.blogService.deleteBlog(id);
  }
}
