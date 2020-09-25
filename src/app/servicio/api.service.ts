import { contacto } from './../model/contacto';
import { telefono } from './../model/telefono';
import { Injectable } from '@angular/core';
import {data} from '../db/db';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ContactList: contacto [] = [];
  constructor() {
    if ( localStorage.getItem('Contact') && localStorage.getItem('Contact') !== '[]'){
       this.ContactList = JSON.parse( localStorage.getItem('Contact'));
    }else {this.ContactList = data; this.SaveLocal(); }
    // this.CreateNewContact("alan","hidalgo");
    // this.AddNewPhone(0,8096673514);
    // console.log(this.GetListPhone(0));
    // console.log(this.GetListContact());
    // console.log(this.RemovePhone(0));
    // console.log(this.RemoveContact(0));
  }



  // method
  CreateNewContact(nombre: string, apellido: string ): void{
    this.ContactList.push(new contacto(nombre , apellido) );
    this.SaveLocal();
  }
  AddNewPhone(IDlist: number, phone: number): void{
    this.ContactList[IDlist].telefono.push(new telefono(phone));
    this.SaveLocal();
  }
  RemoveContact(IDlist): void{
    this.ContactList.splice(IDlist, 1);
    this.SaveLocal();
  }
  RemovePhone(IDlist:number,id:number): void{
    this.ContactList[IDlist].telefono.splice(id, 1);
    this.SaveLocal();
  }
  GetListContact(): contacto[]{
    return this.ContactList;
  }
  GetListPhone(IDlist): Array <telefono> {
    return this.ContactList[IDlist].telefono ;
  }
  EditContact(IDlist: number,newname: string,newapellidos: string){
    this.ContactList[IDlist].nombre = newname;
    this.ContactList[IDlist].apellido = newapellidos;
    this.SaveLocal();
  }
  EditPhone(IDlist: number,id: number, newPhone: number){
    console.log("lista",IDlist)
    console.log("tlefono id",id)
    this.ContactList[IDlist].telefono[id].tel = newPhone;
    this.SaveLocal();
  }
  SaveLocal(): void{
    localStorage.setItem('Contact', JSON.stringify(this.ContactList));
  }

}
