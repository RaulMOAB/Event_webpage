import { Component, Input, NgModule, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EventDbService } from 'src/app/services/event-db.service';
import { Event } from '../../model/event';
@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.css']
})


export class ModifyFormComponent implements OnChanges ,OnInit{

  @Input() selected_event!:Event;




  constructor(private service:EventDbService){}
  ngOnInit(): void {
    this.selected_event = new Event(999,"default","default", new Date(),"default","99");
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.selected_event;
    console.log(this.selected_event._date);
  }
  //Selects options
  locations:string[] = this.service.locations;
  types:string[] = this.service.event_types;

  modifyEvent(){

  }
}
