import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UsersDbService } from 'src/app/services/users-db.service';

import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
@Input() logged_in:boolean = false;

  users!:User[];
  username!:string;
  password!:string;
  user_role!:string;

  constructor(private service: UsersDbService, private myCookie: CookieService){}
  
  loginForm = new FormGroup({
    username: new FormControl('',
    [
     Validators.required,
     Validators.minLength(6),
     Validators.pattern('[a-zA-Z]+')
    ]),
    password: new FormControl('',
    [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('[A-Za-z0-9]+')
    ])
  })


  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.users = this.service.createUsers();
  }

  
  submit(){

    this.username  = this.loginForm.value.username!;//non-null assertion operator
    this.password  = this.loginForm.value.password!;

    //if user is registred return its role to set a cookie
    this.user_role = this.service.check_login(this.username, this.password);

    if (this.user_role) {
      this.myCookie.set('user_cookie', `${this.username} ${this.user_role}`);
      console.log(this.myCookie);
      this.logged_in = true;
    }
    console.log(this.user_role);
    
  }

}
