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
  updated_list!:Event[];
  filtered_events!:Event[];
  events_per_page!:number;
  current_page!:number;

  user_role!:string;
  user_cookie!:string[];

  //filter variables
  filterByPrice!:number;

  locations!:string[];
  selected_location!:string;

  constructor(private eventService:EventDbService, private service:UsersDbService, private MyCookie:CookieService){}

  ngOnInit(): void {
    this.events_per_page = 8;
    this.current_page = 1;
    this.events = this.eventService.createRandomEvents();

    this.filterByPrice = 40;
    this.locations = this.eventService.locations;
    this.filtered_events = this.events;

    this.service.role.subscribe(
      role => {this.user_role = role;}
    )
   
    this.user_cookie = this.MyCookie.get('user_cookie').split(' '); // ['username', 'role']
    this.service.update_role(this.user_cookie[1]);
    //console.log(this.user_cookie);
  }

  delete_event(eventObj:Event){

    this.events = this.eventService.deleteEvent(eventObj);
    console.log(this.events);

  }

  modify_event(){

  }

  filterEvents(){
    console.log(this.selected_location);
    this.events = this.filtered_events.filter(event => {
      if ((Number(event._price) <= this.filterByPrice) &&
       (event._location.indexOf(this.selected_location) !== -1)) {      
        return true;      
    }

    return false;
    });

  }
}
