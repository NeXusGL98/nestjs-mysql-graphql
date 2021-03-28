import { Module } from '@nestjs/common';
import { HousesService } from './houses.service';
import { HousesResolver } from './houses.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { House } from './entities/house.entity';

@Module({
  imports:[TypeOrmModule.forFeature([House])],
  providers: [HousesResolver, HousesService],
  exports:[HousesService]
})
export class HousesModule {}
