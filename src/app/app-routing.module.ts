import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';
import { ShowUserListComponent } from './show-user-list/show-user-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  { path:"home", component: HomeComponent},
  { path:"hello", component: HelloWorldComponent},
  { path:"user-list", component: UserListComponent},
  { path:"show-user", component: ShowUserListComponent},
  { path:"crud/update/:id", component: UserUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
