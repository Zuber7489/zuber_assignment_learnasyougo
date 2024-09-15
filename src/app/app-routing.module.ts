import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', pathMatch:'full',redirectTo:'home' },  // Main page
  { path: 'home', component: HomeComponent },  // Main page
  { path: 'detail', component: DetailComponent },  // Detail page
  { path: '**', redirectTo: '' }  // Redirect invalid routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
