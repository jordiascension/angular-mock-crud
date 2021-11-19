import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../user-list/user';
import { UserAbstractService } from '../user-list/user-abstract.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(private userService: UserAbstractService,private route: ActivatedRoute,private route2:Router) { }
  model:User = new User(-1,'','','')
  id:number = -1;
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params.id;
      this.userService.getUserById(this.id*1).subscribe(data=>this.model = data,error=>console.log(`Error al obtindre dades - ${error}`));
    })
  }

  UpdateUser(){
    this.userService.updateUser(this.model);
    Swal.fire('Student','The student is updated','success');
    this.route2.navigate(['show-user']);
  }
}
