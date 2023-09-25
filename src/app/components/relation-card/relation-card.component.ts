import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
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
  form: FormGroup

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    service: RelationsService,
    fb: FormBuilder
  ) {
    const id = this.route.snapshot.paramMap.get('id')!
    this.relation = service.getRelation(id)!
    this.elements = service.relationElements

    // Created form group
    const formGroup: any = {}
    for (const element of this.elements) {
      const defaultValue =
        element.name in this.relation
          ? (this.relation as any)[element.name]
          : ''

      const validators: Validators[] = []
      if (element.required) validators.push(Validators.required)
      if (element.pattern) validators.push(Validators.pattern(element.pattern))

      formGroup[element.name] = [defaultValue, validators]
    }
    this.form = fb.group(formGroup)
  }

  goBack(): void {
    this.router.navigate(['/'])
  }

  onFieldChanged() {
    console.log('onFieldChanged')
  }
}
