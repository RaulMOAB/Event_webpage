import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UsersDbService } from 'src/app/services/users-db.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  has_logged:boolean = false;


  constructor(private service:UsersDbService, private myCookie: CookieService){}
  
  ngOnInit(): void {
    this.myCookie.get('user_cookie');
    this.service.login.subscribe(
      login =>{
        this.has_logged = login;        
      }          
    );
  }

  logout(){
    this.myCookie.delete('user_cookie');
    
  }
}
