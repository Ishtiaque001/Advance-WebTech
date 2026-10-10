import { Controller, Get, Post, Put,Patch, Delete} from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}
 
@Get()
getAllCourses(): string {
    return "Got all courses - from service ";
}

@Get(':id')
getCourseById(id: string): string {
    return this.courseService.getCourseById(id);
}

@Post()
createCourse(string: string): string {
    return this.courseService.createCourse(string);
}

@Put(':id')
updateCourse(id: string): string {
    return this.courseService.updateCourse(id);
}

@Patch(':id')
patchCourse(id: string): string {
    return this.courseService.patchCourse(id);
}
@Delete(":id")
deleteCourse(id: string): string {
    return this.courseService.deleteCourse(id);
}
}

