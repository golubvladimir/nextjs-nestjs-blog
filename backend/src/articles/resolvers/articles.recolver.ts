import { Resolver, Query, Args } from '@nestjs/graphql';
import { ArticleModel } from '../models/article.model';
import { ArticlesService } from '../services/articles.service';
import { NotFoundException } from '@nestjs/common';
import { ArticlesArgs } from '../dto/articles.args';

@Resolver(of => ArticleModel)
export class ArticlesRecolver {

  constructor(
    private readonly articlesService: ArticlesService
  ) {}

  @Query(returns => ArticleModel)
  async getArticleByID(@Args('id') id: string): Promise<ArticleModel> {
    const article = await this.articlesService.findOneByID(id);

    if (!article) {
      throw new NotFoundException(id);
    }

    return article;
  }

  @Query(returns => [ArticleModel])
  getArticlesAll(@Args() articlesArgs: ArticlesArgs): Promise<ArticleModel[]> {
    return this.articlesService.findAll(articlesArgs)
  }

}