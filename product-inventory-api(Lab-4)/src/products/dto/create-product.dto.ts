import { Type } from "class-transformer";
import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsNumber,
    IsPositive,
    IsInt,
    Min,
    Max,
    IsBoolean,


} from "class-validator"

export class createproductdto{

@IsString()
@IsNotEmpty()
name: string;

@IsString()
@IsOptional()
description: string;

@IsPositive()
@IsNumber()
 price : number;

@IsInt()
@Min(0)
@IsOptional()

stock : number;

@IsString()
@IsNotEmpty()
category: string;

@IsBoolean()
@IsOptional()
IsActive = true;



}



