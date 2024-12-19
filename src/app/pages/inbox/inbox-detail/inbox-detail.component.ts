import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inbox-detail',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './inbox-detail.component.html',
  styleUrl: './inbox-detail.component.css'
})
export class InboxDetailComponent {

  medicalSteps = [
    { title: 'Consulta Inicial', description: 'Revisión del paciente para establecer diagnóstico preliminar.', date: new Date(2023, 0, 15) },
    { title: 'Toma de Muestras', description: 'Se toman muestras de sangre y orina para análisis.', date: new Date(2023, 0, 17) },
    { title: 'Entrega de Resultados', description: 'Se analizan los resultados y se determinan los pasos a seguir.', date: new Date(2023, 0, 20) }
  ];

  suggestedResponse = 'Le recordamos que debe realizar la agendación de su cita para la vacuna';

}
