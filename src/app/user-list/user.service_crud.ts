import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAbstractService } from "./user-abstract.service";
import { User } from './user';
import { Observable } from 'rxjs';

const url = "https://3220bb1c-d667-4645-9c7b-4932cb66720a.mock.pstmn.io";

@Injectable()
export class UserCrudService implements UserAbstractService{
    constructor(private http: HttpClient){}
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${url}/students`);
    }
    addUser(user: User): Observable<User| any> {
        return this.http.post<User>(`${url}/students`,user);
    }
    getUserById(id: number): Observable<User> {
        return this.http.get<User>(`${url}/students/${id}`);
    }
    delete(id: number): void {
        this.http.delete(`${url}/students/${id}`);
    }
    updateUser(user: User): void {
        this.http.put(`${url}/students/${user.id}`,user);
    }

}