import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Hero } from 'src/heros/entities/hero.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "houses" })
@ObjectType()
export class House {

  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'ID' })
  id: number;

  @Column()
  @Field(() => String, { description: 'House name' })
  name: string;

  @OneToMany(type => Hero, hero => hero.house)
  @Field(() => [Hero], { description: 'Heros relations', nullable: true })
  heros: Hero[];

  constructor(initialData?: Partial<House>) {
    Object.assign(this,initialData);
  }
}
