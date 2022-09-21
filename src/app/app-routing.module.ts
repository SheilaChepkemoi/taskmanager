import { TasksComponent } from './modules/tasks/tasks.component';
import { MydayComponent } from './modules/myday/myday.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: '',redirectTo: '/landingpage', pathMatch: 'full'},
  {path: 'landingpage', component:LandingpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'home', component: DefaultComponent,
  children:[
    {path: '', component: DashboardComponent},
    {path: 'myday', component: MydayComponent},
    {path: 'tasks', component: TasksComponent},
    {path: 'tasks', component: TasksComponent},
  ]


}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
