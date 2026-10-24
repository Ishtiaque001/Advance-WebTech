import { 
   Body,
  Controller,
  Get,
  Put,
  Delete,
  Param,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Query,
  Post,
  DefaultValuePipe,
  Patch,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  UploadedFiles,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dtos/create-course.dto.js';
import { UpdateCourseDto } from './dtos/update-course.dto.js';
import { diskStorage } from 'multer';
import { promises as fs } from 'fs';
import type { Response } from 'express';


@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}
 
@Get()
getAllCourses(): string {
    return "Got all courses - from service ";
}

@Get(":id")
getCourseById(@Param("id") id: string): string {
    return this.courseService.getCourseById(id);
}

@Post("create-course")
createCourse(@Body() course: CreateCourseDto){ 
    return this.courseService.createCourse(course);
}

@Put(":id")
updateCourse(@Param("id") id: string, @Body() dto:UpdateCourseDto) {
    return this.courseService.updateCourse(id,dto);
}

@Patch(":id")
patchCourse(@Param("id") id: string,@Body() dto:UpdateCourseDto) {
    return this.courseService.patchCourse(id,dto);
}
@Delete(":id")
deleteCourse(@Param("id") id: string) {
    return this.courseService.deleteCourse(id);
}

  @Post('upload_course_material')
  @UseInterceptors(
    FileInterceptor('file', {
      // storage: diskStorage({
      //   destination: './uploads',
      //   filename: (req, file, cb) => {
      //     const fileName = Date.now() + file.originalname;
      //     cb(null, fileName);
      //   },
      // }),
    }),
  )
  async uploadProfilePic(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 1024 * 1024 * 3,
          }),

      new FileTypeValidator({ fileType: /application\/pdf/ })

        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const fileName = Date.now() + file.originalname;
    const path = `./.uploads/${fileName}`;
    await fs.writeFile(path, file.buffer);

    console.log(file.originalname);
    console.log(file.mimetype);
    console.log(file.size);

    return {
      message: "Material uploaded successfully",
      filename: fileName,
      path: path
    };
  }
}

