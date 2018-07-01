import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceUserComponent } from './device-user/device-user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { AccountComponent } from './account/account.component';
import { SharedModule } from './shared/shared.module';
import { ManageUserComponent } from './user/manage-user/manage-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
@NgModule({
  declarations: [
    AppComponent,
    DeviceDetailComponent,
    DeviceUserComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    DashboardComponent,
    NotificationComponent,
    AccountComponent,
    ManageUserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
