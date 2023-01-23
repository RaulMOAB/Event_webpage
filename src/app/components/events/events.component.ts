import { Component, OnInit } from '@angular/core';
import { EventDbService } from 'src/app/services/event-db.service';
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

  constructor(private eventService:EventDbService){}

  ngOnInit(): void {
    this.events_per_page = 10;
    this.current_page = 1;
    this.events = this.eventService.createRandomEvents();
  }
}
