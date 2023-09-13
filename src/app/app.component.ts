import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mina-web';
  employer = undefined;

  ngOnInit() {
    console.log('app.component.ts ngOnInit()');
  }
}
