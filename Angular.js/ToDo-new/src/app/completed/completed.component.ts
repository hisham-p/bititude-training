import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {

  @Input() task: string;
  @Output() displayTask: string;

}
