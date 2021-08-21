import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseServices } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course!: Course;

    constructor(private activatedRoute: ActivatedRoute, private CourseService: CourseServices) {}

    ngOnInit(): void {
        this.course = this.CourseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!);
    }

}