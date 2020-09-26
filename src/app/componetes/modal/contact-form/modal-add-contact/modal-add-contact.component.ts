import { ApiService } from './../../../../servicio/api.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';


@Component({
  selector: 'app-modal-add-contact',
  templateUrl: './modal-add-contact.component.html',
  styleUrls: ['./modal-add-contact.component.css']
})
export class ModalAddContactComponent  {

  form:FormGroup;
 @Input() IsEdit = false;
 @Input() index: number;
 @Input() name: string;
 @ViewChild('close') modalbutto;
 
  
  constructor(private fb:FormBuilder, private api:ApiService) { 
    this.cargarFormulario();
  }
   get IsinvalidName(){
      return this.form.get('nombre').touched && this.form.get('nombre').invalid ;
  }
   get IsinvalidApellido(){
      return this.form.get('apellido').touched && this.form.get('apellido').invalid;
  }

  cargarFormulario(){
    this.form = this.fb.group({
      nombre: ['', [Validators.required,Validators.minLength(3)]],
      apellido: ['', [Validators.required,Validators.minLength(3)]]
    })
  }
  onSubmit(){
    if (this.IsEdit){
      this.edit();
    }else {
      if (!this.form.valid){
        this.form.markAllAsTouched();
      }else{
           this.api.CreateNewContact(this.form.get('nombre').value,this.form.get('apellido').value);
           this.modalbutto.nativeElement.click();
      }
    }
    }
   edit(){
     this.api.EditContact(this.index,this.form.get('nombre').value,this.form.get('apellido').value);
     this.modalbutto.nativeElement.click();
  }
   blocknum(num){
      return (num >= 97 && num <= 122 || num >=65 && num <=90 || num === 32);
      // 65 90
      // 97 122
   }

}
