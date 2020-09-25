import { telefono } from './telefono';

export class contacto{
    nombre: string;
    apellido: string;
    telefono: telefono []
    constructor(nombre: string , apellido: string){
        this.apellido = nombre;
        this.nombre = nombre;
        this.telefono = [];
    }

}