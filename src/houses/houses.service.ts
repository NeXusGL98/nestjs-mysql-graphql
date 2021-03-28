import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHouseInput } from './dto/create-house.input';
import { UpdateHouseInput } from './dto/update-house.input';
import { House } from './entities/house.entity';

@Injectable()
export class HousesService {

  constructor(
    @InjectRepository(House) private _house: Repository<House>
  ) { }

  async create(createHouseInput: CreateHouseInput): Promise<House> {
    try {
      const house: House = new House(createHouseInput);
      return await this._house.save(house);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<House[]> {
    return await this._house.find();
  }

  async findOne(id: number): Promise<House> {
    return await this._house.findOneOrFail(id);
  }

  async update(id: number, updateHouseInput: UpdateHouseInput): Promise<House> {

    const house = await this.findOne(id);

    house.name = updateHouseInput.name;

    try {
      return await this._house.save(house);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

  }

  async remove(id: number){
    const house = await this.findOne(id);
    try {
      return await this._house.remove(house);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    
  }
}
