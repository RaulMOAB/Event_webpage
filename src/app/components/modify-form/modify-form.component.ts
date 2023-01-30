import { Component, Input, NgModule, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EventDbService } from 'src/app/services/event-db.service';
import { Event } from '../../model/event';
@Component({
  selector: 'app-modify-form',
  templateUrl: './modify-form.component.html',
  styleUrls: ['./modify-form.component.css']
})


export class ModifyFormComponent implements OnChanges{

  @Input() selected_event!:Event;

  selected_date!:Date;
  //Selects options
  locations:string[] = this.service.locations;
  types:string[]     = this.service.event_types;

  //Auxiliars
  aux_date!:string;
  aux_name!:string;
  aux_type!:string;
  aux_price!:string;
  aux_location!:string;

  constructor(private service:EventDbService){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes); // Es interesante para sacar informacion del objeto, en clase lo miramos

    if (this.selected_event !== undefined) {//Si no es undefined es que tiene el evento
      //Formateando la fecha
      const format_day:string = (this.selected_event._date.getDate() < 10) ? `0${this.selected_event._date.getDate().toString()}` : this.selected_event._date.getDate().toString();
      const format_month:string = ((this.selected_event._date.getMonth() + 1 ) < 10) ? `0${(this.selected_event._date.getMonth() + 1 ).toString()}`: `${(this.selected_event._date.getMonth() + 1 ).toString()}`
      this.aux_date = `${this.selected_event._date.getFullYear()}-${format_month}-${format_day}` //date is like 15-03-2023 not /

      //Inicializamos variables auxiliares para no cambiar el objeto original
      this.aux_name = this.selected_event.name;
      this.aux_type = this.selected_event.type;
      this.aux_location = this.selected_event.location;
      this.aux_price = this.selected_event.price;  
    }
  }

  //TODO Preguntar para desabilitar el campo del nombre
  //TODO boton de cerrar y dejar objeto como estaba antes
  
  modifyEvent(){
    //Al dar click a Modificar evento, llamara etsa funcion quye inicializara todas las propiedades del objeto a las variables auxiliares que ya estan modificadas
    this.selected_event.name = this.aux_name;
    this.selected_event.type = this.aux_type;
    this.selected_event.location = this.aux_location;
    this.selected_event.price = this.aux_price;
    this.selected_event.date = new Date(this.aux_date); //Parseamos aux_date porque es un string
  }
 
}
