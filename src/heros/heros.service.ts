import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreateHeroInput } from "./dto/hero-create.dto";
import { Hero } from "./entities/hero.entity";
import * as fs from 'fs';
import * as path from 'path';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HousesService } from "src/houses/houses.service";
import { UpdateHeroInput } from "./dto/update-hero.dto";
@Injectable()
export class HeroService {


    constructor(
        @InjectRepository(Hero) private readonly _hero: Repository<Hero>,
        private readonly _houseService: HousesService
    ) {


    }

    async getHeros(): Promise<Hero[]> {
        return await this._hero.find();
    }

    async findOne(heroId: number): Promise<Hero> {
        return await this._hero.findOneOrFail(heroId);
    }

    async create(input: CreateHeroInput): Promise<Hero> {

        const hero: Hero = new Hero(input);

        try {
            return await this._hero.save(hero);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async update(id: number, updateHeroInput: UpdateHeroInput) {

        const hero = await this.findOne(id);
        hero.houseId = updateHeroInput.houseId;
        hero.name = updateHeroInput.name;
        hero.description = updateHeroInput.description;
        hero.img = updateHeroInput.img;
        try {
            return await this._hero.save(hero);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async remove(id: number) {

        const hero = await this.findOne(id);
        try {
            return await this._hero.remove(hero);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async findHouse(id: number) {
        return await this._houseService.findOne(id);
    }

}