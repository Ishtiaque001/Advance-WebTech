import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
     getAllCourses(){
        return {
            message: "All courses fetched",
            data:[]
     }
}
}





