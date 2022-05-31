import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from 'src/db-data';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
    
  courses = COURSES;
  // title = COURSES[0].description;
  // price = 9.99123456789;
  // rate = 0.67;

  // course = COURSES[0];
  // startDate = new Date(2000, 0, 1);

  // @ViewChild(CourseCardComponent)
  @ViewChild('cardRef1',{read:ElementRef})
  card1!:ElementRef;
  // card1!:CourseCardComponent;

  // @ViewChild('cardRef2')
  // card2!:CourseCardComponent;

  @ViewChild('container')
  // @ViewChild('courseImage')
  courseImage!:ElementRef;
  
  @ViewChildren(CourseCardComponent, {read: ElementRef})
  // @ViewChildren(CourseCardComponent)
  cards!:QueryList<CourseCardComponent>;

  constructor(){
    console.log('containerDiv..:', this.card1);
  }

  ngAfterViewInit(): void {
    //No vemos courseImage porque esta no está en el mismo componente sino en otro.
    // console.log('courseImage..:', this.courseImage);
    // console.log('containerDivAfter..:', this.card1);
    // console.log('ViewChildren..:', this.cards.first);

  //    this.cards.changes.subscribe(
  //        cards=> console.log(cards)
  //    );
      console.log('xxxxx', this.cards);
  }

  onCourseEdited(){
    this.courses.push(
      {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        lessonsCount: 10,
        category: 'INTERMEDIATE'
      }
    );
  }

  onCourseSelected(course:Course){
    // console.log('App component - click event buddled...', course);
    
    // console.log('card2..:', this.card2);
  }

}
