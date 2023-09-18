import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RelationCardComponent } from 'src/app/components/relation-card'
import { SharedModule } from 'src/app/shared/shared.module'
import { RelationComponent } from './relation.component'

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule],
  declarations: [RelationComponent, RelationCardComponent]
})
export class RelationModule {}
