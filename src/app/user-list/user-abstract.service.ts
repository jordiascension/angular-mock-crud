import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable()
export abstract class UserAbstractService {

    abstract getUsers(): Observable<User[]>;
    abstract addUser(user:User): Observable<User>;
    abstract getUserById(id:number): Observable<User>;
    abstract delete(id:number): void;
    abstract updateUser(user:User): void;

}