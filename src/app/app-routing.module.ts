import { ContactComponent } from './contact/contact.component';
import { UtilityComponent } from './utility/utility.component';
import { TeamComponent } from './team/team.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'team', component: TeamComponent },
{ path: 'employee', component: EmployeeComponent },
{ path: 'utility', component: UtilityComponent },
{ path: 'contact', component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }