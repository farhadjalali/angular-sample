import { Injectable } from '@angular/core'
import { PartialLoadItem, Relation } from './relations.types'

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class RelationsService {
  constructor(private http: HttpClient) {}

  loadRelationObserver$() {
    return new Observable<PartialLoadItem<Relation>>((subscriber) => {
      this.http.get('assets/sample.json').subscribe((data: any) => {
        // Mocking the loading of the relations
        let index = 0
        const itemLoadSimulatedDelay = 200 // ms
        const interval = setInterval(() => {
          if (index === data.length) {
            clearInterval(interval)
            return subscriber.complete()
          }

          subscriber.next({
            item: data[index] as Relation,
            index,
            total: data.length
          })
          index++
        }, itemLoadSimulatedDelay)
      })
    })
  }
}
