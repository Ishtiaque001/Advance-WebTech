import { Injectable } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';

@Injectable()

export class EnrollmentService {
      constructor(private readonly courseService: CourseService) {}


      enrollStudent(studentName: string, courseId: string) {

        const fetchdata = this.courseService.getCourseById(courseId);
        return {
            message: "Student enrolled successfully",
            student : studentName,
            course : fetchdata

        }
      }
      getEnrollments(){
        return "All enrollments fetched, data : []"
      }
    }
