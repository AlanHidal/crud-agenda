import { ApiService } from './../../servicio/api.service';
import { telefono } from './../../model/telefono';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.css']
})
export class TelefonoComponent  {
  listaphone: telefono[] = [];
  id: number;
  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.route.params.subscribe(( data ) => {this.listaphone = this.api.GetListPhone(data.id);
                                             this.id = data.id; } );
  }
  del(i){
    console.log(this.id);
    console.log(i);
    this.api.RemovePhone(this.id,i);
  }
}
