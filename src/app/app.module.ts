import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ShowUserListComponent } from './show-user-list/show-user-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserAbstractService } from './user-list/user-abstract.service';
import { UserCrudService } from './user-list/user.service_crud';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HelloWorldComponent,
    ShowUserListComponent,
    HomeComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:UserAbstractService,useClass:UserCrudService}
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
