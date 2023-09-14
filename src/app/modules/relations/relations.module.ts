import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { RelationListComponent } from '../../components/relation-list'
import { RelationsComponent } from './relations.component'

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [RelationsComponent, RelationListComponent],
  providers: []
})
export class RelationsModule {}
