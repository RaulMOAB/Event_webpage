import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventDbService {
  event_created!:Event;
  event_list!:Event[];

  constructor() { }

  randomGenerator(list:string[]):number{
   let random_element = Math.trunc(Math.random() * list.length);

   return random_element;
  }

  createRandomEvents(){
    let events_name = [
      'Bring Me the Horizon',
      'Michael Bublé',
      'Tokio Hotel',
      'Capitán Carver',
      'La Ballena (The Whale)'
    ];

    let event_types = ['Concert', 'Movie'];
    let dates       = ['2023-05-15', '2023-10-14', '2023-01-30', '2023-06-11','2023-02-04'];;
    let locations   = ['Barcelona', 'Madrid', 'Granada'];
    let prices      = ['35.95', '96.50', '25.50',' 75.99', '12'];

    //random genertor
    let random = this.randomGenerator(events_name);


    for (let i = 0; i < 100; i++) {
      let random_dates = new Date(dates[random]);
      this.event_created = new Event(events_name[random], event_types[random], random_dates, locations[random], prices[random]);
      
    }
  }

   
}
