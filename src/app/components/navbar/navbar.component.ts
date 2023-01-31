import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsersDbService } from 'src/app/services/users-db.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  has_logged:boolean = false;
  has_localStorage!:string;
  


  constructor(private service:UsersDbService, private myCookie: CookieService, private router:Router){}
  
  ngOnInit(): void {
    this.myCookie.get('user_cookie');
    this.service.login.subscribe(
      login =>{
        this.has_logged = login;
              
      }          
    );
    
    this.has_localStorage = localStorage.getItem('has_logged')!;
  }

  logout(){
    this.has_localStorage = localStorage.removeItem('has_logged')!;
    this.myCookie.delete('user_cookie');
    this.has_logged = false;
    this.router.navigate(['/login-form']);
  }
}
