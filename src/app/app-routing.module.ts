import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListsComponent } from './user-lists/user-lists.component';

const routes: Routes = [
  {
    path : "dashboard",
    component : DashboardComponent
  },
  {
    path : "user-list",
    component : UserListsComponent
  },
  {
    path : "user-create",
    component : UserCreateComponent
  },
  {
    path : "user-edit/:id", // user-edit/aabbb
    component : UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
