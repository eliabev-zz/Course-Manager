import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1;
                name: 'Angular: Forms';
                imgUrl: '';
                price: 99.99;
                code: 'XPS-5327';
                duration: 120;
                rating: 5.4
            },
            {
                id: 1;
                name: 'Angular: HTTP';
                imgUrl: '';
                price: 98.99;
                code: 'LKL-5327';
                duration: 0100;
                rating: 6.3
            }
        ]
    }

}