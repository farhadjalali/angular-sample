import { Component, Input } from '@angular/core'

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() progress: number = 0

  // Hide the progress bar when it's 100%
  opacity = this.progress === 100 ? 0 : 1
}
