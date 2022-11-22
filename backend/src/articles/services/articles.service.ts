import { Injectable } from '@nestjs/common';
import { ArticleModel } from '../models/article.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticlesArgs } from '../dto/articles.args';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticleModel)
    private readonly articlesRepository: Repository<ArticleModel>
  ) {}

  async findOneByID(id: string): Promise<ArticleModel> {
    return this.articlesRepository.findOneBy({
      id
    })
  }

  async findAll(articlesArgs: ArticlesArgs): Promise<ArticleModel[]> {
    return this.articlesRepository
      .find({
        skip: (articlesArgs['page'] - 1) * articlesArgs['limit'],
        take: articlesArgs['limit']
      });
  }
}