import { Component, OnInit } from '@angular/core';
import { User } from './user';
import Swal from 'sweetalert2';
import { UserAbstractService } from './user-abstract.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserAbstractService) { }

  ngOnInit(): void {
  }
  model = new User(18,'Marc','Vives', '12345678A');
  submittet = false;
  onSubmit(){ this.submittet = true;}

  SaveUser(){
    //Per test (aixi no borra el ususari de prova)
    const user: User= {
      id: this.model.id,
      name: this.model.name,
      surname: this.model.surname,
      dni: this.model.dni
    }
    this.userService.addUser(user).subscribe(data=>{
      if(this.model.name === data.name &&
        this.model.surname === data.surname &&
        this.model.dni === data.dni){
          Swal.fire('Students', 'The student is insered', 'success');
      }else{
        Swal.fire('Students', 'Error on student insert', 'error');
      }
    },
    error=>{
      Swal.fire('Students', 'Error on student insert', 'error');
      
    });
    // En entorn productiu seria mes correcte crear 
  }
}
