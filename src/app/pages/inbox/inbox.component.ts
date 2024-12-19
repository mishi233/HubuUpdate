import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

export interface Inbox {
  id: number;
  nombre_mascota: string;
  tutor: string;
  tipo: boolean; //true (Entrante) - false (Saliente)
  ultima_conversacion: Date;
  mensaje: string;    
}

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [ MatTableModule, CommonModule, RouterOutlet],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent {

  constructor(private router: Router) {}

  username = "Michael"
  totalCases = "16"

  ELEMENT_DATA: Inbox[] = [
    { id: 1, nombre_mascota: "Rex", tutor: "German", tipo: true, ultima_conversacion: new Date(2023, 1, 15), mensaje: "Consulta sobre alimentación" },
    { id: 2, nombre_mascota: "Miau", tutor: "Laura", tipo: false, ultima_conversacion: new Date(2023, 3, 10), mensaje: "Recordatorio de vacunación" },
    { id: 3, nombre_mascota: "Max", tutor: "Carlos", tipo: true, ultima_conversacion: new Date(2022, 10, 8), mensaje: "Solicitud de revisión médica" },
    { id: 4, nombre_mascota: "Luna", tutor: "María", tipo: false, ultima_conversacion: new Date(2023, 5, 20), mensaje: "Recomendaciones postoperatorias" },
    { id: 5, nombre_mascota: "Boby", tutor: "José", tipo: true, ultima_conversacion: new Date(2022, 8, 14), mensaje: "Dudas sobre tratamiento" },
    { id: 6, nombre_mascota: "Kitty", tutor: "Ana", tipo: false, ultima_conversacion: new Date(2023, 7, 5), mensaje: "Recordatorio de control anual" },
    { id: 7, nombre_mascota: "Fido", tutor: "Luis", tipo: true, ultima_conversacion: new Date(2023, 9, 25), mensaje: "Consulta por comportamiento" },
    { id: 8, nombre_mascota: "Bella", tutor: "Sofía", tipo: false, ultima_conversacion: new Date(2023, 11, 30), mensaje: "Recomendación de dieta personalizada" },
    { id: 9, nombre_mascota: "Rocky", tutor: "Miguel", tipo: true, ultima_conversacion: new Date(2022, 4, 18), mensaje: "Consulta de urgencia por herida" },
    { id: 10, nombre_mascota: "Nina", tutor: "Isabel", tipo: false, ultima_conversacion: new Date(2023, 2, 12), mensaje: "Información sobre desparasitación" }
  ];

  showSidebar = false

  displayedColumns: string[] = ['nombre_mascota', 'tutor', 'tipo', 'ultima_conversacion', 'mensaje'];
  dataSource = this.ELEMENT_DATA;

  onRowClick(id: number): void{
    this.showSidebar = true
    this.router.navigate(['dashboard/inbox/',id]);
  }

  closeSidebar(){
    this.showSidebar = false
    this.router.navigate(['dashboard/inbox/']);
  }
}
