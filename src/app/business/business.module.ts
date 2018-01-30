import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatDividerModule, MatGridListModule, MatFormFieldModule, MAT_LABEL_GLOBAL_OPTIONS, MatOptionModule, MatSelectModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CustomersComponent } from './customers/customers.component';
import { PartnersComponent } from './partners/partners.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      {path: 'business', component:MainComponent},
      {path: 'customers', component:CustomersComponent},
      {path: 'partners', component:PartnersComponent},
      {path: 'register', component:RegisterComponent}
    ])
  ],
  declarations: [MainComponent, CustomersComponent, PartnersComponent, RegisterComponent],
  providers:[]
})
export class BusinessModule { }
