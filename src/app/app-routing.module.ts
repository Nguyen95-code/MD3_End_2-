import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListAwesomeComponent} from './list-awesome/list-awesome.component';
import {CreateAwesomeComponent} from './create-awesome/create-awesome.component';
import {EditAwesomeComponent} from './edit-awesome/edit-awesome.component';
import {DeleteAwesomeComponent} from './delete-awesome/delete-awesome.component';


const routes: Routes = [
  {
    path: '',
    component: ListAwesomeComponent
  },
  {
    path: 'create-awesome',
    component: CreateAwesomeComponent
  },
  {
    path: 'edit-awesome/:id',
    component: EditAwesomeComponent
  },
  {
    path: 'delete-awesome/:id',
    component: DeleteAwesomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
