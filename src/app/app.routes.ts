import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ParticipantComponent } from './pages/principal/steps/participant/participant.component';
import { InboxDetailComponent } from './pages/inbox/inbox-detail/inbox-detail.component';
import { InboxComponent } from './pages/inbox/inbox.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'principal', component: PrincipalComponent},
      { path: 'participant/:id', component: ParticipantComponent},
      { path: 'inbox', component: InboxComponent,
        children: [
          { path: ':id', component: InboxDetailComponent },
        ]
      }
    ]
  },
  { path: '**', redirectTo: 'dashboard' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
