import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
