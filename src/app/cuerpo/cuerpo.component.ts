import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cuerpo',
  imports: [FormsModule],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css',
})
export class CuerpoComponent {

    // Valores iniciales
    imagenPrincipal: string = '/Casa portada.webp';
    huespedes: number = 1;
    noches: number = 1;
    total: number = 0;
  
    // Extras
    mascota: boolean = false;
    calefaccion: boolean = false;
    rutaMontana: boolean = false;
    senderismo: boolean = false;
    cascada: boolean = false;
  
    constructor() {
      this.calcularTotal();
    }
  
    cambiarImagen(imagen: string): void {
      this.imagenPrincipal = imagen;
    }
  
    incrementarHuespedes(): void {
      this.huespedes++;
      this.calcularTotal();
    }
  
    decrementarHuespedes(): void {
      this.huespedes = Math.max(1, this.huespedes - 1);
      this.calcularTotal();
    }
  
    incrementarNoches(): void {
      this.noches++;
      this.calcularTotal();
    }
  
    decrementarNoches(): void {
      this.noches = Math.max(1, this.noches - 1); //Si intentas bajar de 1, ¡mejor quédate en 1!//
      this.calcularTotal();
    }
  
    calcularTotal(): void {
      let subtotal = (this.huespedes * 500) + (this.noches * 1000);
  
      // Agregar costos de extras si se seleccionan
      if (this.mascota) subtotal += 250;
      if (this.calefaccion) subtotal += 500;
      if (this.rutaMontana) subtotal += 150;
      if (this.senderismo) subtotal += 200;
      if (this.cascada) subtotal += 50;
  
      this.total = subtotal;
    }
  }
