import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { RelationComponent } from './modules/relation/relation.component'
import { RelationsComponent } from './modules/relations/relations.component'

const routes: Routes = [
  { path: 'relation/:id', component: RelationComponent },
  { path: 'relations', component: RelationsComponent },
  { path: '', redirectTo: '/relations', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
