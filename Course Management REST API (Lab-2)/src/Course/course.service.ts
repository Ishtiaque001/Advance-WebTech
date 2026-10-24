import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dtos/create-course.dto.js';
import { UpdateCourseDto } from './dtos/update-course.dto.js';

@Injectable()
export class CourseService {
      getHelllo(): string {
        return "Hello !";
      }
 
getAllCourses(){
    return {
        message : "All courses fetched successfully",
         data: []
    }
}

getCourseById(id: string){
    return "Get Course with id " +id +" - from service";
    
}

createCourse( dto: CreateCourseDto){
    return {
        message: "Course Created Successfully",
             data: dto
}
}
updateCourse( id: string, dto: UpdateCourseDto){ 
    return{
        message: "Course Updated successfully",
        id: id,
        data: dto
        
    } 
}
patchCourse(id: string,dto: UpdateCourseDto){
    return{
        message: "Course patched successfully",
        id: id,
        updatedFields : ["name","credits"]

     } 
}
 deleteCourse(id: string){
    return{
        message: "Course deleted successfully",
        id: id
    }
 }
 /* uploadCourseMaterial (id: string){
   
    return { 
       
    message: "Material uploaded successfully",
      id: id,
     filename: "2mb.pdf",
      path:"C:\Users\HP\Downloads"

    }


  }*/

      




}