import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { House } from "src/houses/entities/house.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "heros" })
@ObjectType()
export class Hero {

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field(() => String)
    name: string;

    @Column({ nullable: true })
    @Field(() => Int)
    houseId: number;

    @ManyToOne(type => House, h => h.heros)
    @JoinColumn({name:'houseId'})
    @Field(() => House,{nullable:true})
    house: House

    @Column({ nullable: true })
    @Field(() => String, { nullable: true })
    description: string;

    @Column({ nullable: true })
    @Field(() => String, { nullable: true })
    img: string;

    constructor(partial: Partial<Hero>) {
        Object.assign(this, partial)
    }
}