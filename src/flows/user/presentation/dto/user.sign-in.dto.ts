import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UserSignInDto {
    @ApiProperty({ example: 'test1@gmail.com' })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: '123453' })
    @IsString()
    @IsNotEmpty()
    password: string;
}