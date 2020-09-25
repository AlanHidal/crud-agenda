import { contacto } from './../../model/contacto';
import { ApiService } from './../../servicio/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  Listcontact:contacto []= [];
  constructor(private api:ApiService) {
    this.Listcontact = this.api.GetListContact();
   }
   del(id){
     this.api.RemoveContact(id);
     
   }

}
