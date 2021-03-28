import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import * as path from 'path';
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {

    constructor(private readonly _config:ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        

        return {
            type: 'mysql',
            host: this._config.get('host'),
            port: this._config.get('port'),
            username: this._config.get('db_username'),
            password: this._config.get('password'),
            database: this._config.get('database'),
            entities:['dist/**/*.entity{.ts,.js}'],
            synchronize: true,
        };
    }
}