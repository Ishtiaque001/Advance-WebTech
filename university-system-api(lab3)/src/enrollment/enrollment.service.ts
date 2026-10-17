import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';
import { NotificationService } from '../notification/notification.service.js';


@Injectable()

export class EnrollmentService {
      constructor(
    @Inject(CourseService)
    private readonly courseService: CourseService,
          @Inject(forwardRef(()=> NotificationService))
           
        private readonly NotificationService: NotificationService,)
        {}
    
  

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
