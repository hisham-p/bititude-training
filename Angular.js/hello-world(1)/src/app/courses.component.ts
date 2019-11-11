import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `<h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">{{course}}</li>
        <br>
        <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue':'white'">Save</button>
        <button class="btn btn-primary">Submit</button>
        </ul>
    <table>
    <tr>
        <h4><u>{{title}}</u> (in tables)</h4>
    </tr>
    <tr *ngFor="let tcourse of courses">
        <td  [attr.colspan]="colSpan">{{tcourse}}</td>
    </tr>
    </table>`
})
export class CoursesComponent {
    title = 'List of courses';
    courses;
    isActive = true;
    colSpan = 1;
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}