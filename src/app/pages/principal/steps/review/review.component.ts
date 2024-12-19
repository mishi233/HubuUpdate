import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ MatTableModule, CommonModule ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  dataSource = [
    {
      prioridad: 'Alta',
      procedimiento: 'Rehidratación intravenosa, suplementación de vitaminas y minerales, dieta balanceada.',
      costo_final: 250000
    },
    {
      prioridad: 'Media',
      procedimiento: 'Administración de alimentos especiales, control de peso, monitoreo de salud.',
      costo_final: 120000
    },
    {
      prioridad: 'Baja',
      procedimiento: 'Consulta veterinaria y seguimiento, dieta casera recomendada.',
      costo_final: 80000
    }
  ];  

  displayedColumns: string[] = ['prioridad', 'procedimiento', 'costo_final'];
  isAgendarOpen = false

  abrirAgendar(){
    this.isAgendarOpen = true
  }

  cerrarAgendar(){
    this.isAgendarOpen = false
  }
}
