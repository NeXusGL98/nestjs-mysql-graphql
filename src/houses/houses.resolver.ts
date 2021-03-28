import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HousesService } from './houses.service';
import { House } from './entities/house.entity';
import { CreateHouseInput } from './dto/create-house.input';
import { UpdateHouseInput } from './dto/update-house.input';

@Resolver(() => House)
export class HousesResolver {
  constructor(private readonly _housesService: HousesService) {}


  @Mutation(() => House)
  async createHouse(@Args('createHouseInput') createHouseInput: CreateHouseInput) {
    return await this._housesService.create(createHouseInput);
  }

  @Query(() => [House], { name: 'houses' })
  async findAll() {
    return await this._housesService.findAll();
  }

  @Query(() => House, { name: 'house' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this._housesService.findOne(id);
  }

  @Mutation(() => House)
  async updateHouse(@Args('updateHouseInput') updateHouseInput: UpdateHouseInput) {
    return await this._housesService.update(updateHouseInput.id, updateHouseInput);
  }

  @Mutation(() => House)
  async removeHouse(@Args('id', { type: () => Int }) id: number) {
    return await this._housesService.remove(id);
  }
}
