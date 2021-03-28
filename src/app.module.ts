import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {join} from 'path'
import databaseConfiguration from './config/database';
import { DatabaseModule } from './database/database.module';
import { HerosModule } from './heros/heros.module';
import { HousesModule } from './houses/houses.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      //creates an autoSchema for graphQL
      autoSchemaFile: join(process.cwd(),'schema.gql'),
    }),
    ConfigModule.forRoot({
      load:[databaseConfiguration],
      isGlobal: true,
    }),
    DatabaseModule,
    HerosModule,
    HousesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
