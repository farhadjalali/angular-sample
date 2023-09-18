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
  @Input() validation: RegExp | string[] | null | undefined = null
  @Input() defaultValue: string | undefined = ''
  @Output() change = new EventEmitter<CardElementChange>()

  value = ''
  editMode = false
  hasError = false

  ngOnChanges() {
    this.value = this.defaultValue || ''
  }

  handleChange(newValue: string) {
    if (!this.hasError) {
      this.editMode = false
      this.value = newValue
      this.change.emit({ newValue: this.value, name: this.name })
    }
  }

  handleReset() {
    this.editMode = false
  }

  handleInputChange(value: string) {
    console.log('handleInputChange', value, this.validation)
    if (this.validation) {
      let valid = true
      if (this.validation instanceof RegExp) {
        valid = this.validation.test(value)
      } else if (Array.isArray(this.validation)) {
        valid = this.validation.includes(value)
      }
      this.hasError = !valid
    }
  }
}
