import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./typeormConfig.service";



@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports:[ConfigModule],
            useClass: TypeOrmConfigService
        })
    ],
    providers: [],
    exports: [],
})
export class DatabaseModule {}