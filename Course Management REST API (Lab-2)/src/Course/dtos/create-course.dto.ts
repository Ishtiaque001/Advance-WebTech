import { InstanceWrapper } from '@nestjs/core/internal';
import {Type} from 'class-transformer';
import {
    IsString,
    IsNotEmpty,
    IsNumber,
    Min,
    Max,
    IsOptional
    
    
}  from "class-validator";
export class CreateCourseDto{
    @IsString()
     @IsNotEmpty ({
        message:"Course name,cannot be empty",
     })
     name: string;

    @IsString()
    code:string;

    @IsString()    
    @IsNotEmpty({
        message: "Instructor name,cannot be empty"
    })
    instructor: string;


    @Type(() =>Number)
    @Min(1)
    @Max(6)
    credits : number;

    @IsOptional()
    description: string;

    
    

}









