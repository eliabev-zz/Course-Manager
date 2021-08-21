import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseServices } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: Course = new Course;

    constructor(private activatedRoute: ActivatedRoute, private courseServices: CourseServices) {}

    ngOnInit(): void {
        this.courseServices.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error ', err)
        });
    }

    save(): void{
        this.courseServices.save(this.course).subscribe({
            next: course => console.log('Saved With Success', course),
            error: err => console.log('Error', err)            
        });
    }

}