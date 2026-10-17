import { forwardRef, Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service.js';
import { EnrollmentController } from './enrollment.controller.js';
import { CourseModule } from '../course/course.module.js';
import { NotificationModule } from '../notification/notification.module.js';


@Module({
  imports: [forwardRef(() => NotificationModule)],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  //imports: [CourseModule]
})
export class EnrollmentModule {}
