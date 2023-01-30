import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UsersDbService } from 'src/app/services/users-db.service';

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  is_logged:boolean = false;
  has_logged!:string;
  user_error!:boolean;
  users!:User[];
  username!:string;
  password!:string;
  user_role!:string;

  constructor(private service: UsersDbService, private myCookie: CookieService, private router: Router){}
  
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
    this.has_logged = localStorage.getItem('has_logged')!;
   
    this.service.login.subscribe(
      login =>{
        this.is_logged = login;        
      }          
      );

      if (this.has_logged == 'true') {
        this.service.is_logged(true);
        this.router.navigate(['/events']);
        
      }else{
        this.service.is_logged(false);
       
      }
console.log(this.is_logged);

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
      
      this.service.is_logged(true);
      localStorage.setItem('has_logged',JSON.stringify(this.is_logged));
      this.router.navigate(['/events']);

    }else{
      this.service.is_logged(false);
      this.user_error = true;
    }
    
    
  }


}
