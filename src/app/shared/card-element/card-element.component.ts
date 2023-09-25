import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Relation, RelationsService } from 'src/services/relations'

type CardElementChangeEventArgs = {
  name: string
  newValue: string | undefined
}

@Component({
  selector: 'card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.scss']
})
export class CardElementComponent implements OnChanges, OnInit {
  @Input() formGroup!: FormGroup
  @Input() name = ''
  @Input() label = ''
  @Input() id!: string
  @Output('change') change = new EventEmitter<CardElementChangeEventArgs>()

  editMode = false
  value?: Relation

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['formGroup']) {
    //   this.value = this.controlValue
    // }
  }

  ngOnInit(): void {
    this.service.getRelation$(this.id).subscribe((item) => (this.value = item))
  }

  constructor(private service: RelationsService) {
    this.service.getRelations$().subscribe((data) => console.log('data', data))
  }

  get controlValue() {
    return this.formGroup?.get(this.name)!.value
  }

  // get value() {
  //   return (this.service.getRelation(this.id) as any)[this.name]
  // }

  onPressEnter(newValue: string, errors: any) {
    if (!errors) {
      this.editMode = false
      // this.value = newValue
      this.change.emit({
        newValue: this.formGroup?.get(this.name)!.value,
        name: this.name
      })
    }
  }

  handleReset() {
    this.editMode = false
  }
}
