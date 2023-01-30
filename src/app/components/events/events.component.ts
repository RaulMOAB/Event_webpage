import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  to_modify_event!:Event;

  events!:Event[];
  filtered_events!:Event[];
  
  user_role!:string;
  user_cookie!:string[];
  //pagination  
  events_per_page!:number;
  current_page!:number;
  //filter variables
  filterByPrice!:number;
  locations!:string[];
  selected_location:string = '';
  filterByName!:string;
  

  //aux variable
  display!:boolean;

  constructor(private eventService:EventDbService, private service:UsersDbService, private MyCookie:CookieService){}

  ngOnInit(): void {
    this.display = true;//pasar a false
    this.events_per_page = 8;
    this.current_page = 1;
    this.events = this.eventService.createRandomEvents();

    this.filtered_events = this.events;
    this.filterByPrice   = 40;
    this.locations       = this.eventService.locations;
    this.filterByName    = "";

    this.service.role.subscribe(
      role => {this.user_role = role;}
    )
   
    this.user_cookie = this.MyCookie.get('user_cookie').split(' '); // ['username', 'role']
    this.service.update_role(this.user_cookie[1]);
    //console.log(this.user_cookie);


  }

  delete_event(eventObj:Event){
    this.events = this.eventService.deleteEvent(eventObj);
  }

  modify_event(selected_event:Event):void{
    this.to_modify_event =  selected_event;
  }

  filterEvents(){
 
    this.filtered_events = this.events.filter(event => {
      if ((Number(event._price) <= this.filterByPrice) &&
       (event._location.indexOf(this.selected_location) !== -1) &&
       (event._name.indexOf(this.filterByName) !== -1)) {      
        return true;      
    }

    return false;
    });
    console.log(this.filterByName);
  }

  toggleDiv(){
    this.display = !this.display;
    console.log(this.display);
  }
}
