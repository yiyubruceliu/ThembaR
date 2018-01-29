import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatDividerModule, MatGridListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CustomersComponent } from './customers/customers.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    RouterModule.forChild([
      {path: 'business', component:MainComponent},
      {path: 'customers', component:CustomersComponent},
      {path: 'partners', component:PartnersComponent}
    ])
  ],
  declarations: [MainComponent, CustomersComponent, PartnersComponent]
})
export class BusinessModule { }
