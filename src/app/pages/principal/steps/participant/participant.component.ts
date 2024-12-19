import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientInformationComponent } from '../patient-information/patient-information.component'
import { ReviewComponent } from '../review/review.component'
import { SendInformationComponent } from '../send-information/send-information.component'

@Component({
  selector: 'app-participant',
  standalone: true,
  imports: [CommonModule, PatientInformationComponent, ReviewComponent, SendInformationComponent],
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.css'
})
export class ParticipantComponent {
  currentStep=2
}
