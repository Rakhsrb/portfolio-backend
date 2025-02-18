import { IsNotEmpty } from 'class-validator';

export class BlogDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  excerpt: string;

  @IsNotEmpty()
  description: string;
}
