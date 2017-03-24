import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Two-Way Binding';
  story = {
    name: 'The Empire Stikes Back'
  };
  changeName(name) {
    this.story.name = name;
  }
}
