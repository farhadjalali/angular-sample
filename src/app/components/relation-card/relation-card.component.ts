import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CardElementSchema } from 'src/services'
import { Relation, RelationsService } from 'src/services/relations'

@Component({
  selector: 'relation-card',
  templateUrl: './relation-card.component.html',
  styleUrls: ['./relation-card.component.scss']
})
export class RelationCardComponent {
  relation: Relation
  elements: CardElementSchema[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    service: RelationsService
  ) {
    const id = this.route.snapshot.paramMap.get('id')!
    this.relation = service.getRelation(id)!
    this.elements = service.relationElements
  }

  getDefaultElementValue(name: string) {
    return name in this.relation ? (this.relation as any)[name] : ''
  }

  goBack(): void {
    this.router.navigate(['/'])
  }

  onFieldChanged() {
    console.log('onFieldChanged')
  }
}
