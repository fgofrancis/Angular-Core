import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {

  @Input()
  course!:Course;

  @Input()
  cardIndex!:number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild('courseImage')
  image!:ElementRef;

  constructor() { }

  ngAfterViewInit() {
    console.log('This image..', this.image);
    // console.log(`This image.. ${this.image} ` );
  }

  ngOnInit(): void {
  }

  onCourseViewed(){
    this.courseSelected.emit(this.course);
  }

  isImageVisible(){
    return this.course && this.course.iconUrl
  }

  cardClasses(){
      if (this.course.category === 'BEGINNER'){
        return ['beginner']
      };
      return ''
  }

  cardStyles(){
    return {
      'background-image':'url(' + this.course.iconUrl + ')'
    }
  }
}
 