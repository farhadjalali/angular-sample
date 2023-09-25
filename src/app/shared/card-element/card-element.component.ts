import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core'
import { FormGroup } from '@angular/forms'

type CardElementChangeEventArgs = {
  name: string
  newValue: string | undefined
}

@Component({
  selector: 'card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.scss']
})
export class CardElementComponent implements OnChanges {
  @Input() formGroup!: FormGroup
  @Input() name = ''
  @Input() label = ''
  @Output('change') change = new EventEmitter<CardElementChangeEventArgs>()

  editMode = false
  value = this.controlValue

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formGroup']) {
      this.value = this.controlValue
    }
  }

  get controlValue() {
    return this.formGroup?.get(this.name)!.value
  }

  onPressEnter(newValue: string, errors: any) {
    if (!errors) {
      this.editMode = false
      this.value = newValue
      this.change.emit({ newValue: this.value, name: this.name })
    }
  }

  handleReset() {
    this.editMode = false
  }
}
