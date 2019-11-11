import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {

  }
  title = 'todos';
  names: Array<string> = [];
  team: Array<string> = [];
  completed: Array<string> = [];
  onKeyUp(name: string) {
    this.names.push(name);
    console.log(name);
  }
  onAddName(name: string) {
    this.team.push(name);
    console.log(this.team);
  }
  onRemoveName(name: string) {
    const index = this.names.indexOf(name);
    this.completed.push(name);
    this.names.splice(index , 1);
    console.log(this.names);
    console.log(this.completed);
  }
  clearAll() {

    this.completed.splice(0, this.completed.length);
  }
}
