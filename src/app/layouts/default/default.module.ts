import { NotificationsComponent } from './../../modules/notifications/notifications.component';
import { SettingsComponent } from './../../modules/settings/settings.component';
import { TasksComponent } from './../../modules/tasks/tasks.component';
import { MydayComponent } from './../../modules/myday/myday.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    MydayComponent,
    TasksComponent,
    SettingsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    NgbModule

    
   
  ]
})
export class DefaultModule { }
