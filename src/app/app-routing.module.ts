import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Card11Component } from './card11/card11.component';
import { CardComponent } from './HR/card/card.component';
import { CreateusersComponent } from './HR/createusers/createusers.component';
import { HrhomeComponent } from './HR/hrhome/hrhome.component';
import { LoginComponent } from './Root/login/login.component';
import { SearchComponent } from './HR/search/search.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HrprofileComponent } from './hrprofile/hrprofile.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';

import { AchievementdetailsComponent } from './Profile/achievementdetails/achievementdetails.component';
import { PersonaldetailsComponent } from './Profile/personaldetails/personaldetails.component';
import { ProjectdetailsComponent } from './Profile/projectdetails/projectdetails.component';
const routes: Routes = [

  {path:"adminhome",component:AdminHomeComponent},
  {path:"hrhome",component:HrhomeComponent},
  {path:"search",component:SearchComponent},
  {path:"card",component:CardComponent},
  {path:"newcard",component:Card11Component},
  {path:"createusers",component:CreateusersComponent},
  {path:"changepassword",component:ChangepasswordComponent},
  {path:"hrprofile",component:HrprofileComponent},
  //{path:"hrprofile/:userId",component:HrprofileComponent},
  {path:"createprofile",component:CreateprofileComponent},
  {path:"personaldetails", component:PersonaldetailsComponent},
  {path:"projectdetails", component:ProjectdetailsComponent},
  {path:"achievementdetails", component:AchievementdetailsComponent},
 
  {path:"",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
