import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterLink } from '@angular/router'
import { RelationListComponent } from 'src/app/components/relation-list'
import { SharedModule } from 'src/app/shared/shared.module'
import { RelationsService } from 'src/services/relations'
import { RelationsComponent } from './relations.component'

@NgModule({
  imports: [SharedModule, CommonModule, RouterLink],
  exports: [],
  declarations: [RelationsComponent, RelationListComponent],
  providers: [RelationsService]
})
export class RelationsModule {}
