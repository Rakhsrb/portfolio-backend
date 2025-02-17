import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './blog.schema';
import { Model } from 'mongoose';
import { BlogDto } from './dto/blog.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async getAllBlogs() {
    return this.blogModel.find().exec();
  }

  async getBlogById(id: string) {
    const blog = await this.blogModel.findById(id).exec();
    if (!blog) throw new NotFoundException('Blog not found');
    return blog;
  }

  async createBlog(dto: BlogDto) {
    return this.blogModel.create(dto);
  }

  async updateBlog(id: string, dto: BlogDto) {
    const updatedBlog = await this.blogModel
      .findByIdAndUpdate(id, dto, {
        new: true,
      })
      .exec();

    if (!updatedBlog) throw new NotFoundException('Blog not found');
    return updatedBlog;
  }

  async deleteBlog(id: string) {
    const deletedBlog = await this.blogModel.findByIdAndDelete(id).exec();
    if (!deletedBlog) throw new NotFoundException('Blog not found');
    return { message: 'Blog deleted successfully' };
  }
}
