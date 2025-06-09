import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UserSignUpDto {
    @ApiProperty({ example: 'test 1' })
    @IsString()
    @IsNotEmpty()
    names: string;

    @ApiProperty({ example: 'test 2' })
    @IsString()
    @IsNotEmpty()
    lastNames: string;

    @ApiProperty({ example: '123' })
    @IsString()
    @IsNotEmpty()
    documentNumber: string;

    @ApiProperty({ example: 'test1@gmail.com' })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: '3112738807' })
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @ApiProperty({ example: '123453' })
    @IsString()
    @IsNotEmpty()
    password: string;
}