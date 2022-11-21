import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType({
  description: 'articles'
})
@Entity({
  name: 'articles'
})
export class ArticleModel {
  @Field(type => ID)
  @PrimaryGeneratedColumn({
    name: 'id'
  })
  id: string;

  @Field()
  @Column({
    name: 'title'
  })
  title: string;

  @Field({ nullable: true })
  @Column({
    name: 'description',
    nullable: true
  })
  description?: string;

  @Field()
  @Column({
    name: 'createdAt'
  })
  createdAt: Date;
}