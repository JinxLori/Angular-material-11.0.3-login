import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'YK';
// }
export class AppComponent implements OnInit {

  constructor() { }

  regularItems = [];
  selected = 'option2';

  ngOnInit(): void {
  }

}