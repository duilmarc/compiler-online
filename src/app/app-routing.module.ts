import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InitComponent } from './pages/init/init.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {
    path : 'home', component : InitComponent
  },
  {
    path : 'result/:query', component : ResultsComponent
  },

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
