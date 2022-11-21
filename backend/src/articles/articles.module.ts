import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModel } from './models/article.model';
import { ArticlesService } from './services/articles.service';
import { ArticlesRecolver } from './resolvers/articles.recolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ArticleModel
    ])
  ],
  providers: [
    ArticlesService,
    ArticlesRecolver
  ]
})
export class ArticlesModule {}