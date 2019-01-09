import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'resume', component: HomepageComponent},
  {path: 'projects', component: HomepageComponent},
  {path: 'about', component: HomepageComponent},
  {path: 'contact', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
