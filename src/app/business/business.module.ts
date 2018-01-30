import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatDividerModule, MatGridListModule, MatFormFieldModule, MAT_LABEL_GLOBAL_OPTIONS, MatOptionModule, MatSelectModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CustomersComponent } from './customers/customers.component';
import { PartnersComponent } from './partners/partners.component';
import { RegisterComponent } from './register/register.component';
import { CreateAgreementComponent } from './create-agreement/create-agreement.component';
import { ApproveAgreementComponent } from './approve-agreement/approve-agreement.component';
import { EarnPointsComponent } from './earn-points/earn-points.component';

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
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      {path: 'business', component:MainComponent},
      {path: 'customers', component:CustomersComponent},
      {path: 'partners', component:PartnersComponent},
      {path: 'register', component:RegisterComponent},
      {path: 'create-agreement', component:CreateAgreementComponent},
      {path: 'approve-agreement', component:ApproveAgreementComponent},
      {path: 'earn-points', component:EarnPointsComponent}
    ])
  ],
  declarations: [MainComponent, CustomersComponent, PartnersComponent, RegisterComponent, CreateAgreementComponent, ApproveAgreementComponent, EarnPointsComponent],
  providers:[]
})
export class BusinessModule { }
