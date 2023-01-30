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

  
  aux_date!:string;
  selected_date!:Date;
  //Selects options
  locations:string[] = this.service.locations;
  types:string[] = this.service.event_types;
  
  constructor(private service:EventDbService){}
  ngOnInit(): void {
    this.selected_event = new Event();// inicializar evento
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.selected_event !== undefined) {
      const format_day:string = (this.selected_event._date.getDate() < 10) ? `0${this.selected_event._date.getDate().toString()}` : this.selected_event._date.getDate().toString();
      const format_month:string = ((this.selected_event._date.getMonth() + 1 ) < 10) ? `0${(this.selected_event._date.getMonth() + 1 ).toString()}`: `${(this.selected_event._date.getMonth() + 1 ).toString()}`
      this.aux_date = `${this.selected_event._date.getFullYear()}-${format_month}-${format_day}` //date is like 15-03-2023 not /
      const selected_date:Date = new Date(this.aux_date);
      this.selected_event._date = selected_date;     
    }
  }
 
}
