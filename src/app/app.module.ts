import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TableComponent } from './table/table.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { FormComponent } from './form/form.component';
// Import thư viện này để sử dụng Form
import { FormsModule } from '@angular/forms';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { ListComponent } from './user/form/list/list.component';
import { AvatarComponent } from './avatar/avatar.component';
import { DameComponent } from './dame/dame.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NameComponent,
    IdentityComponent,
    TableAvatarComponent,
    FormComponent,
    ShowValidateComponent,
    ListComponent,
    AvatarComponent,
    DameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule // Đưa vào đây để FormComponent bên trên có thể dùng
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }