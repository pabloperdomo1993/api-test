import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class TransactionCreateDto {
    @ApiProperty({ example: 15 })
    @IsNumber()
    amount: number;

    @ApiProperty({ example: 'USD' })
    @IsString()
    currency: string;

    @ApiProperty({ example: 'Hot dog' })
    @IsString()
    description: string;

    @ApiProperty({ example: 1 })
    @IsNumber()
    restaurantId: number;
}