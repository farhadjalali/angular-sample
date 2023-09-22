import { Component, EventEmitter, Input, Output } from '@angular/core'

type CardElementChangeEventArgs = {
  name: string
  newValue: string | undefined
}

@Component({
  selector: 'card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.scss']
})
export class CardElementComponent {
  @Input() name = ''
  @Input() label = ''
  @Input() required: boolean | undefined = false
  @Input() pattern: string | undefined = ''
  @Input() defaultValue: string | undefined = ''
  @Output('change') change = new EventEmitter<CardElementChangeEventArgs>()

  value = ''
  editMode = false

  ngOnChanges() {
    this.value = this.defaultValue || ''
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
