import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';



@NgModule({
  declarations: [CourseCardComponent],
  exports:[CourseCardComponent],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
