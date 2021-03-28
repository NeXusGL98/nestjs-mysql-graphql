import { Field, InputType, Int } from "@nestjs/graphql";


@InputType()
export class CreateHeroInput {
    @Field(() => String)
    name: string;

    @Field(() => Int)
    houseId: number;

    @Field(() => String)
    description: string;

    @Field(() => String)
    img: string;
}