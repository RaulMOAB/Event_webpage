import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventDbService {

  events!:Event[];
  delete_event!:Event[];
  events_name:string[] = [
    'Bring Me The Horizon',
    'Michael Bublé',
    'Tokio Hotel',
    'Capitán Carver',
    'La Ballena (The Whale)'
  ];
  event_types:string[] = ['Concert', 'Movie'];
  dates:string[]       = ['2023-05-15', '2023-10-14', '2023-01-30', '2023-06-11','2023-02-04'];
  locations:string[]   = ['Barcelona', 'Madrid', 'Granada'];
  prices:string[]      = ['35.95', '96.50', '25.50',' 75.50', '12'];

 
  constructor() { 
    this.events = this.createRandomEvents();
  }



  randomGenerator(list:string[]):number{
   let random_element = Math.trunc(Math.random() * list.length);

   return random_element;
  }

  createRandomEvents():Event[]{

    let event_list:Event[] = [];

    for (let i = 0; i < 100; i++) {
      //random genertor
      let random_names:number     = this.randomGenerator(this.events_name);
      let random_types:number     = this.randomGenerator(this.event_types);
      let random_dates:number     = this.randomGenerator(this.dates);
      let random_locations:number = this.randomGenerator(this.locations);
      let random_prices:number    = this.randomGenerator(this.prices);
      let random_dates_obj:Date   = new Date(this.dates[random_dates]);
      

      let event_created = new Event(
        i,
        this.events_name[random_names],
        this.event_types[random_types],
        random_dates_obj,
        this.locations[random_locations],
        this.prices[random_prices]);

      event_list.push(event_created)!;  
      
    }

    return event_list;
  }

  deleteEvent(eventObj:Event):Event[]{

    this.events.forEach((event, index) =>{
      if (event._id == eventObj._id) {    
        this.events.splice(index,1);
      }

    })
    return this.events;
  }

   
}
