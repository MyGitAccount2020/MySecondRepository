import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ApplicationComponent } from './components/application/application.component';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'application', component: ApplicationComponent }
  { path: '', redirectTo: 'application', pathMatch: 'full' },
  { path: 'application', component: HomeComponent, children: [
    { path: '', component: ApplicationComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
