import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnChanges {
  @Input() progress: number = 0

  opacity = 0

  ngOnChanges(changes: SimpleChanges): void {
    // Hide the progress bar when it's 100%
    this.opacity = this.progress === 100 ? 0 : 1
  }
}
