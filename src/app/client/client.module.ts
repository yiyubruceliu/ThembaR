import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild([
      {path: 'client', component:DashboardComponent}
    ])
  ],
  exports:[RouterModule],
  declarations: [DashboardComponent]
})
export class ClientModule { }
