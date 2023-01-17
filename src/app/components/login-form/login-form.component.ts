import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UsersDbService } from 'src/app/services/users-db.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  users!:User[];
  username!:string;
  password!:string;

  constructor(private service: UsersDbService){}
  
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

    //this.user = new User(this.loginForm.value.username,this.loginForm.value.email, this.loginForm.value.civil_status, this.loginForm.value.gender, this.info);                  
    
    // this.username = `Nombre usuario: ${this.loginForm.value.username}`;
    // this.email    = `Email: ${this.loginForm.value.email}`;
    // this.state    = `Estado civil: ${this.loginForm.value.civil_status}`
    // this.sex      = `${this.loginForm.value.gender}`
    // this.interest = `Intereses: ${this.info}`

    
  }

}
