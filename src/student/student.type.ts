import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field()
  id: string;

  @Field()
  firstname: string;

  @Field()
  lastName: string;
}
