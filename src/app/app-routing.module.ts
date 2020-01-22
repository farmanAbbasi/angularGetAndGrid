import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';
import { Ang7Component } from './ang7/ang7.component';

const routes: Routes = [
  
  {
    path:  'list',
    component: ListComponent
  },
  {
    path:  'ang7',
    component: Ang7Component
  },
  {
    path:  'grid',
    component: GridComponent
  },
  {
    path:  '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
