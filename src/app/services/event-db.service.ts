import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventDbService {

  events!:Event[];
  delete_event!:Event[];

 
  constructor() { 
    this.events = this.createRandomEvents();
  }



  randomGenerator(list:string[]):number{
   let random_element = Math.trunc(Math.random() * list.length);

   return random_element;
  }

  createRandomEvents():Event[]{

    let event_list:Event[] = [];
    let events_name = [
      'Bring Me The Horizon',
      'Michael Bublé',
      'Tokio Hotel',
      'Capitán Carver',
      'La Ballena (The Whale)'
    ];

    let event_types:string[] = ['Concert', 'Movie'];
    let dates:string[]       = ['2023-05-15', '2023-10-14', '2023-01-30', '2023-06-11','2023-02-04'];;
    let locations:string[]   = ['Barcelona', 'Madrid', 'Granada'];
    let prices:string[]      = ['35.95', '96.50', '25.50',' 75.99', '12'];

    
    
    
    for (let i = 0; i < 10; i++) {
      //random genertor
      let random_names:number     = this.randomGenerator(events_name);
      let random_types:number     = this.randomGenerator(event_types);
      let random_dates:number     = this.randomGenerator(dates);
      let random_locations:number = this.randomGenerator(locations);
      let random_prices:number    = this.randomGenerator(prices);
      let random_dates_obj:Date = new Date(dates[random_dates]);
      

      let event_created = new Event(
        i,
        events_name[random_names],
        event_types[random_types],
        random_dates_obj,
        locations[random_locations],
        prices[random_prices]);

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

    console.log('delete en el servicio');
    console.log(this.events);
    return this.events;
  }

   
}
