import { telefono } from './telefono';

export class contacto{
    nombre: string;
    apellido: string;
    telefono: telefono []
    constructor(nombre: string , apellido: string){
        this.apellido = nombre;
        this.nombre = apellido;
        this.telefono = [];
    }

}