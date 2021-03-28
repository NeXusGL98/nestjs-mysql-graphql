import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CreateHeroInput } from './dto/hero-create.dto';
import { HeroService } from './heros.service';
import { Hero } from './entities/hero.entity';
import { House } from 'src/houses/entities/house.entity';
import { UpdateHeroInput } from './dto/update-hero.dto';
@Resolver(of => Hero)
export class HerosResolver {

    constructor(private readonly _heros: HeroService) {
    }


    @Query(() => [Hero], { name: 'heros' })
    async getHeros(): Promise<Hero[]> {
        return await this._heros.getHeros();
    }

    @Query(() => Hero, { name: 'hero' })
    async getHero(@Args('id',{type: ()=> Int}) heroId: number): Promise<Hero> {
        return await this._heros.findOne(heroId);
    }

    @ResolveField(() => House, { name: 'house' })
    async findHouse(@Parent() parent: Hero): Promise<House> {
        return await this._heros.findHouse(parent.houseId);
    }

    @Mutation(() => Hero)
    async createHero(@Args('createHero') input: CreateHeroInput): Promise<Hero> {
        return await this._heros.create(input);
    }

    @Mutation(() => Hero)
    async updateHero(@Args('updateHeroInput') updateHeroInput: UpdateHeroInput) {
        return await this._heros.update(updateHeroInput.id, updateHeroInput);
    }

    @Mutation(() => Hero)
    async removeHero(@Args('id',{type: ()=> Int}) id:number) {
        return await this._heros.remove(id);
    }

}
