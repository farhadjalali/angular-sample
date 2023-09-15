import { Component, EventEmitter, Input, Output } from '@angular/core'

type CardElementChange = {
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
  @Input() validation: RegExp | string[] | null = null
  @Input() defaultValue: string | undefined = ''
  @Output() change = new EventEmitter<CardElementChange>()

  value = this.defaultValue
  editMode = false
  hasError = false

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !this.hasError) {
      this.editMode = false
      this.change.emit({ newValue: this.value, name: this.name })
    }

    if (event.key === 'Escape') {
      this.editMode = false
      this.value = this.defaultValue
    }
  }

  handleInputChange(event: any) {
    this.value = event.target.value
    if (this.validation) {
      let valid = true
      if (this.validation instanceof RegExp) {
        valid = this.validation.test(event.target.value)
      } else if (Array.isArray(this.validation)) {
        valid = this.validation.includes(event.target.value)
      }
      this.hasError = !valid
    }
  }
}
