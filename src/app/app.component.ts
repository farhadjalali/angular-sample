import { Component, OnInit } from '@angular/core'
import { fromEvent, interval, switchMap } from 'rxjs'

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const clickObservable = fromEvent(document, 'click')

    const switchedObservable = clickObservable.pipe(
      switchMap(() => interval(500))
    )

    switchedObservable.subscribe((value) => {
      // console.log(value) // Outputs numbers from the inner interval observable
    })
  }
}
