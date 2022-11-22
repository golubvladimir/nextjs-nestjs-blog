import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@ArgsType()
export class ArticlesArgs {
  @Field(type => Int)
  @Min(1)
  page = 1;

  @Field(type => Int)
  @Min(1)
  @Max(50)
  limit = 15
}