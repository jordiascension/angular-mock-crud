// import {User} from '../user-list/user';
// import { Injectable } from '@angular/core';
// import { UserAbstractService } from './user-abstract.service';

// @Injectable()
// export class UserService implements UserAbstractService{
//     private _user: User[] = [];
//     constructor(){}

//     addUser(user:User): Boolean{
//         if(this._user.length>0)user.id = this._user.sort((a,b)=>a.id-b.id)[this._user.length-1].id+1;
//         else user.id = 1
//         this._user.push(user);
//         console.log("Users array count "+ this._user.length);
//         console.log(this._user);
//         return true;
//     }

//     getUsers():User[]{
//         return this._user;
//     }

//     getUserById(id: number):User {
//         const user = this._user.find(u=>u.id === id);
//         if(typeof user !== 'undefined') return user;
//         return new User(0,'','','');
//     }

//     delete(id:number){
//         const index = this._user.findIndex(u=>u.id === id);
//         if(index>=0) this._user.splice(index,1);
//     }

//     updateUser(user:User){
//         const index = this._user.findIndex(u=>u.id === user.id);
//         if(index>=0) this._user.splice(index,1,user);
//     }
// }