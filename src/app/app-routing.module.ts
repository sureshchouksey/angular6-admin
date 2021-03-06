import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent} from './dashboard/dashboard.component';
import { DeviceUserComponent } from './device-user/device-user.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';
import { NotificationComponent} from './notification/notification.component';
import { LogoutComponent} from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { ManageUserComponent} from './user/manage-user/manage-user.component';
import { CreateUserComponent} from './user/create-user/create-user.component'

const ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent }, 
  { path:'register',component:RegisterComponent},
  { path:'deviceRegister',component:DeviceUserComponent},
  { path:'login',component:LoginComponent},
  { path:'notification',component:ManageUserComponent},
  { path:'logout',component:LogoutComponent},
  { path:'account',component:AccountComponent},
  { path:'createUser',component:CreateUserComponent}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}