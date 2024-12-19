import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ RouterOutlet, MatIconModule ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  navigateToPrincipal() {
    this.router.navigate(['/dashboard/principal']);
  }

  navigateToInbox() {
    this.router.navigate(['/dashboard/inbox']); 
  }
}
