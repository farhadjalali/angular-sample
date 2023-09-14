import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { RelationModule } from './modules/relation/relation.module'
import { RelationsModule } from './modules/relations/relations.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RelationsModule, RelationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
