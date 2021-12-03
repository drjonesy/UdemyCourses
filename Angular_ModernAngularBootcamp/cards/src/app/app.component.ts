import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      imageURL: 'assets/tree.jpeg',
      title: 'Neat Tree',
      username: 'nature',
      content: 'Saw this awesome tree during my hike today',
    },
    {
      imageURL: 'assets/mountain.jpeg',
      title: 'Snowy Mountain',
      username: 'hikingperson',
      content: 'Beautiful views of some mountains I saw during my hike',
    },
    {
      imageURL: 'assets/biking.jpeg',
      title: 'Mountain Biking',
      username: 'biking12222',
      content: 'Action shot of me riding my bike',
    },
  ];
}
