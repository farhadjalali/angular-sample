import { Component } from '@angular/core'
import { RelationsService } from 'src/app/modules/relations/relations.service'
import { Relation } from 'src/app/modules/relations/relations.types'

@Component({
  selector: 'relation-list',
  templateUrl: './relation-list.component.html',
  styleUrls: ['./relation-list.component.scss']
})
export class RelationListComponent {
  relations: Relation[] = []
  progress: number = 0

  constructor(service: RelationsService) {
    service.loadRelationObserver$().subscribe((partialLoadItem) => {
      this.relations.push(partialLoadItem.item)
      this.progress =
        ((partialLoadItem.index + 1) / partialLoadItem.total) * 100
    })
  }
}
