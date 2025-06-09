import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return {
                    type: 'mysql',
                    host: configService.get<string>('DATABASE_HOST'),
                    port: configService.get<number>('DATABASE_PORT'),
                    username: configService.get<string>('DATABASE_USER'),
                    password: configService.get<string>('DATABASE_PASSWORD'),
                    database: configService.get<string>('DATABASE_NAME'),
                    entities: [__dirname + '/../**/*.entity.{ts,js}'],
                    synchronize: false,
                };
            },
        }),
    ],
    providers: [ConfigService],
})

export class DatabaseModule { }
