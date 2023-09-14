import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CardElementComponent } from './card-element'
import { ProgressBarComponent } from './progress-bar/progress-bar.component'

const components = [ProgressBarComponent, CardElementComponent]

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components
})
export class SharedModule {}
