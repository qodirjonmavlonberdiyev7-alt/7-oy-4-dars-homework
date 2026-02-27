import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional} from "class-validator";

export class QueryDto {
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    @ApiProperty({default: 1, minimum: 1})
    page?: number = 1;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    @ApiProperty({default: 10, minimum: 1, maximum: 100})
    limit?: number = 10; 

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    search?: string
}