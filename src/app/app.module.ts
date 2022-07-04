import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateusersComponent } from './HR/createusers/createusers.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HrhomeComponent } from './HR/hrhome/hrhome.component';
import { SearchComponent } from './HR/search/search.component';
import { LoginComponent } from './Root/login/login.component';
import { CardComponent } from './HR/card/card.component';
import { Card11Component } from './card11/card11.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HrprofileComponent } from './hrprofile/hrprofile.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { PersonaldetailsComponent } from './Profile/personaldetails/personaldetails.component';

import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { ProjectdetailsComponent } from './Profile/projectdetails/projectdetails.component';
import { AchievementdetailsComponent } from './Profile/achievementdetails/achievementdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateusersComponent,
    SidebarComponent,
    TopbarComponent,
    
    HrhomeComponent,
    SearchComponent,
    LoginComponent,
    CardComponent,
    Card11Component,
    ChangepasswordComponent,
    HrprofileComponent,
    CreateprofileComponent,
    PersonaldetailsComponent,
    AdminHomeComponent,
    ProjectdetailsComponent,
    AchievementdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
