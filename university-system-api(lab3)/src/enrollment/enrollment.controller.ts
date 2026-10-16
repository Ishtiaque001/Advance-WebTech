import { Controller,Get,Post,Param,Body } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service.js';

@Controller('enrollment')
export class EnrollmentController {

  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
     enrollStudent(@Body("studentName") studentName: string,
                 @Body("courseid") courseid : string)
     {

      return this.enrollmentService.enrollStudent(studentName,courseid)
     }

     @Get()
      getEnrollment(){
        return this.enrollmentService.getEnrollments();
      }
  }



