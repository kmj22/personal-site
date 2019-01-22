import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {EmploymentHistoryPageComponent} from './employment-history-page/employment-history-page.component';
import {ProjectsPageComponent} from './projects-page/projects-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'resume', component: EmploymentHistoryPageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'about', component: HomepageComponent},
  {path: 'contact', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
