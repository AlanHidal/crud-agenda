import { ActivatedRoute } from '@angular/router';
import { telefono } from './../../../../model/telefono';

import { ApiService } from './../../../../servicio/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-modal-editphone',
  templateUrl: './modal-editphone.component.html',
  styleUrls: ['./modal-editphone.component.css']
})
export class ModalEditphoneComponent {

  form:FormGroup;
  @Input() IsEdit = false;
  @Input() indexPhone: number ;
  @Input() name: string;
  listcontactid: number;
 
   constructor(private fb:FormBuilder, private api:ApiService, private route:ActivatedRoute) { 
     this.route.params.subscribe((data)=>{
       this.listcontactid = data.id;
     })
     this.cargarFormulario();
   }
    get IsinvalidTelefono(){
       return this.form.get('telefono').touched && this.form.get('telefono').invalid ;
   }
   cargarFormulario(){
     this.form = this.fb.group({
       telefono: ['', [Validators.required,Validators.minLength(3)]],
     })
   }
   onSubmit(){
     if (this.IsEdit){
       this.edit();
     }else {
       if (!this.form.valid){
         this.form.markAllAsTouched();
       }else{
            this.api.AddNewPhone(this.listcontactid, this.form.get("telefono").value);
       }
     }
     }
     edit(){
        this.api.EditPhone(this.listcontactid,this.indexPhone,this.form.get("telefono").value)
    };
    blockletter(char){
      return (char >= 48 && char <= 57);
    }

}
