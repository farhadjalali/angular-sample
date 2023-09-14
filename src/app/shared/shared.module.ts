import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CardElementComponent } from './card-element'
import { ProgressBarComponent } from './progress-bar/progress-bar.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ProgressBarComponent, CardElementComponent],
  exports: [ProgressBarComponent, CardElementComponent]
})
export class SharedModule {}
