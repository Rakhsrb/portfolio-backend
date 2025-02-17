import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://suhrobrahmatullayev973132:eDD8BGYjT5asQ74g@nest.zdy9i.mongodb.net/?retryWrites=true&w=majority&appName=nest',
    ),
    BlogModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
