import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'mina-web'
  employer = undefined

  ngOnInit() {
    console.log('app.component.ts ngOnInit()')
  }
}
