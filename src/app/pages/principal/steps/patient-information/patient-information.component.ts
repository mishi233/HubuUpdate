import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-patient-information',
  standalone: true,
  imports: [ MatIconModule ],
  templateUrl: './patient-information.component.html',
  styleUrl: './patient-information.component.css'
})
export class PatientInformationComponent {
  username = "Cesar"
}
