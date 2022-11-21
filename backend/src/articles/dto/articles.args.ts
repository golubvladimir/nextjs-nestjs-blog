import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class ArticlesArgs {
  @Field(type => Int)

  page = 1;

  @Field(type => Int)
  limit = 15
}