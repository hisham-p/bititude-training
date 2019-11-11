import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() title: string;
  @Output() remove = new EventEmitter();
    constructor() {
      console.log('items loaded');
    }

  ngOnInit() {
  }

  onRemove(name: string) {
    console.log('removed');
    this.remove.emit(name);
  }

}
