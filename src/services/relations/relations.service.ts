import { Injectable } from '@angular/core'
import { Relation } from './relations.types'

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { CardElementSchema, PartialLoadItem } from '../shared'

@Injectable()
export class RelationsService {
  relations: Relation[] = []
  progress = { value: 0 }
  relationElements: CardElementSchema[] = [
    { name: 'name', label: 'Name', required: true },
    { name: 'surname', label: 'Surname' },
    {
      name: 'gender',
      label: 'Gender',
      required: true
    },
    { name: 'age', label: 'Age' },
    { name: 'phone', label: 'Phone', pattern: '^\\d+-\\d+-\\d+\\$' },
    { name: 'email', label: 'Email', pattern: '^[\\w.-]+@[\\w-]+.\\w+\\$' },
    { name: 'address', label: 'Address' }
  ]

  constructor(private http: HttpClient) {
    this.initializeRelations()
  }

  private loadRelationObserver$() {
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

  initializeRelations() {
    this.relations = []
    this.loadRelationObserver$().subscribe((data) => {
      this.relations.push(data.item)
      this.progress.value = ((data.index + 1) / data.total) * 100
    })
  }

  getRelation(id: string): Relation | undefined {
    return this.relations.find((relation) => relation.id === id)
  }
}
