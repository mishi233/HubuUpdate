import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

export interface Patients {
  id: number;
  tutor: string;
  estado: boolean;
  costo: number;
  fecha_de_creacion: Date;
  numero_telefonico: number;
  email: string;
  especie: string;
  nombre_mascota: string;
}

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [ MatTableModule, CommonModule ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  constructor(private router: Router) {}

  ELEMENT_DATA: Patients[] = [
    {id: 1, tutor: "German", estado: true, costo: 1500000, fecha_de_creacion: new Date(2023, 1, 15), numero_telefonico: 3046501127, email: "german@gmail.com", especie: "Canino", nombre_mascota: "Rex"},
    {id: 2, tutor: "Laura", estado: false, costo: 1200000, fecha_de_creacion: new Date(2023, 3, 10), numero_telefonico: 3123456789, email: "laura@hotmail.com", especie: "Felino", nombre_mascota: "Miau"},
    {id: 3, tutor: "Carlos", estado: true, costo: 2000000, fecha_de_creacion: new Date(2022, 10, 8), numero_telefonico: 3157896541, email: "carlos@gmail.com", especie: "Canino", nombre_mascota: "Max"},
    {id: 4, tutor: "María", estado: true, costo: 1800000, fecha_de_creacion: new Date(2023, 5, 20), numero_telefonico: 3014567890, email: "maria@outlook.com", especie: "Felino", nombre_mascota: "Luna"},
    {id: 5, tutor: "José", estado: false, costo: 950000, fecha_de_creacion: new Date(2022, 8, 14), numero_telefonico: 3109876543, email: "jose@yahoo.com", especie: "Canino", nombre_mascota: "Boby"},
    {id: 6, tutor: "Ana", estado: true, costo: 1350000, fecha_de_creacion: new Date(2023, 7, 5), numero_telefonico: 3001234567, email: "ana@gmail.com", especie: "Felino", nombre_mascota: "Kitty"},
    {id: 7, tutor: "Luis", estado: false, costo: 2200000, fecha_de_creacion: new Date(2023, 9, 25), numero_telefonico: 3186543210, email: "luis@hotmail.com", especie: "Canino", nombre_mascota: "Fido"},
    {id: 8, tutor: "Sofía", estado: true, costo: 1650000, fecha_de_creacion: new Date(2023, 11, 30), numero_telefonico: 3029876543, email: "sofia@outlook.com", especie: "Felino", nombre_mascota: "Bella"},
    {id: 9, tutor: "Miguel", estado: true, costo: 1400000, fecha_de_creacion: new Date(2022, 4, 18), numero_telefonico: 3145678901, email: "miguel@yahoo.com", especie: "Canino", nombre_mascota: "Rocky"},
    {id: 10, tutor: "Isabel", estado: false, costo: 1750000, fecha_de_creacion: new Date(2023, 2, 12), numero_telefonico: 3167890123, email: "isabel@gmail.com", especie: "Felino", nombre_mascota: "Nina"}
];
  

  username = "Cesar"
  totalCases = "16"

  displayedColumns: string[] = ['nombre_mascota', 'estado', 'especie' ,'costo', 'fecha_de_creacion', 'tutor', 'numero_telefonico', 'email'];
  dataSource = this.ELEMENT_DATA;
  

  onRowClick(id: number): void{
    this.router.navigate(['/dashboard/participant/', id]);
  }
}