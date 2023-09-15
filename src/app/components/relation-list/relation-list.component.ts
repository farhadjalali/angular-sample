import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Relation, RelationsService } from 'src/services/relations'

@Component({
  selector: 'relation-list',
  templateUrl: './relation-list.component.html',
  styleUrls: ['./relation-list.component.scss']
})
export class RelationListComponent {
  relations: Relation[] = []
  progress = { value: 0 }

  constructor(
    private router: Router,
    service: RelationsService
  ) {
    service.initializeRelations()
    this.relations = service.relations
    this.progress = service.progress
  }

  navigateRelation(relation: Relation) {
    this.router.navigate([`/relation/${relation.id}`])
  }
}
