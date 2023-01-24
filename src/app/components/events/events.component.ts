import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EventDbService } from 'src/app/services/event-db.service';
import { UsersDbService } from 'src/app/services/users-db.service';
import { Event } from '../../model/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{

  events!:Event[];
  events_per_page!:number;
  current_page!:number;

  user_role!:string;
  user_cookie!:string[];

  constructor(private eventService:EventDbService, private service:UsersDbService, private MyCookie:CookieService){}

  ngOnInit(): void {
    this.events_per_page = 10;
    this.current_page = 1;
    this.events = this.eventService.createRandomEvents();

    this.service.role.subscribe(
      role => {this.user_role = role;}
    )
   
    this.user_cookie = this.MyCookie.get('user_cookie').split(' '); // ['username', 'role']
    this.service.update_role(this.user_cookie[1]);
    console.log(this.user_cookie);
  }

  delete_event(eventObj:Event){
    console.log(eventObj._name);//captura el nombre del evento
  }

  modify_event(){

  }
}
