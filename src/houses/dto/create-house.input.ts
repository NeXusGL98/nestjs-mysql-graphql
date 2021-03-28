import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHouseInput {
  @Field(() => String, { description: 'Name' })
  name: string;

}
