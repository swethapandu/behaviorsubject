import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private user = new BehaviorSubject<string>('John');
 cast = this.user.asObservable();
  constructor() { }
/*  users: string[] = ['John','Peter'];

  getFirstUser(){
    return this.users[0];
  }*/
  editUser(newUser){
    this.user.next(newUser);
  }
}
