import { Body, forwardRef, Inject, Injectable, Post, } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service.js';

type EnrollmentServiceType  = EnrollmentService;
@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private readonly enrollmentService: EnrollmentServiceType,){}

    sendNotification(studentName:string,message:string){
        return{
            student: studentName,
            message : "Notification Sent"      
          };
    }
    
    checkEnrollmentAndNotify (studnetName: string,courseId:string){

        return {
            student: studnetName,
            courseId: courseId
            
        }
    }
}
