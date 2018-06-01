import { Component, OnInit } from '@angular/core';
import { UserService} from '../../service/user.service'

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
 user: string;
 editedUser:string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  //  this. user = this.userService.getFirstUser();
  this.userService.cast.subscribe(user=>{
    this.user = user;
  })
}
editTheUser(){
  this.userService.editUser(this.editedUser);
}

}
