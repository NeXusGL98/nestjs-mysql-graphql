import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HeroService } from "./heros.service";
import { Hero } from "./entities/hero.entity";
import { HerosResolver } from './heros.resolver';
import { HousesModule } from "src/houses/houses.module";


@Module({
    imports:[
        TypeOrmModule.forFeature([Hero]),
        HousesModule
    ],
    controllers:[],
    providers:[HerosResolver,HeroService],
    exports:[]
})
export class HerosModule {}