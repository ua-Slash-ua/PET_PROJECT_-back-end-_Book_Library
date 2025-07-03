import { IsOptional, IsArray, IsString } from 'class-validator';

export class BookFilterDto {
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    author?: string[];

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    genre?: string[];
}
