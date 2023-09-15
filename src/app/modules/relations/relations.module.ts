import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { RelationListComponent } from '../../components/relation-list'
import { RelationsComponent } from './relations.component'
import { RelationsService } from './relations.service'

@NgModule({
  imports: [SharedModule, CommonModule],
  exports: [],
  declarations: [RelationsComponent, RelationListComponent],
  providers: [RelationsService]
})
export class RelationsModule {}
