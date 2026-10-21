import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
      getHelllo(): string {
        return "Hello !";
      }
 
getAllCourses(){
    return "All Courses - from service";
}

getCourseById(id: string){
    return "Get Course with id " +id +" - from service";
    
}

createCourse(string: string){
    return "Create Course - from service";
}
updateCourse( id: string){
    return "Update Course " + id + " - from service";
}
patchCourse(id: string){
    return "Patch Course " + id + " - from service";
}
 deleteCourse(id: string){
    return "Delete Course " + id + " - from service";
 }

      




}