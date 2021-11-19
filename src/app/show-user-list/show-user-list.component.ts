import { Component, OnInit } from '@angular/core';
import { User } from '../user-list/user';
import { UserAbstractService } from '../user-list/user-abstract.service';

@Component({
  selector: 'app-show-user-list',
  templateUrl: './show-user-list.component.html',
  styleUrls: ['./show-user-list.component.css']
})
export class ShowUserListComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserAbstractService) {
    this.getUsers();
  }

  ngOnInit(): void {
  }
  getUsers():void {
    this.userService.getUsers().subscribe(
      data=>{
        this.users = data;
      },
      error=>{
        console.error(`Hi ha agut un error en getUsers() - ${error}`);
      }
    );
  }
  delete(id:number){
    this.userService.delete(id);
  }

}
