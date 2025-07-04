import {IsOptional, IsArray, IsString, IsNumber} from 'class-validator';

export class BookFilterDto {
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    author?: string[];

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    genre?: string[];

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsNumber()
    per_page?: number

    @IsOptional()
    @IsString()
    sort?: string

}
