import { Component, isDevMode, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = "Marc";

  greet(): void{
    if(environment.production){
      Swal.fire('WE ARE IN PRODUCTION ENVIRONTMENT');
    }
    if(isDevMode()){
      Swal.fire('WE ARE IN DEVELOPMENT ENVI')
    }
    Swal.fire(`Hello ${this.name}`);
  }


}
