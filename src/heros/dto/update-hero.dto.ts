import { Field, InputType, Int, PartialType } from "@nestjs/graphql";
import { CreateHeroInput } from "./hero-create.dto";

@InputType()
export class UpdateHeroInput extends PartialType(CreateHeroInput) {
    @Field(() => Int)
    id: number;
}

