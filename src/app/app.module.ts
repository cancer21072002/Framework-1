import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { IdentityComponent } from './identity/identity.component';
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableAvatarComponent,
    IdentityComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
