import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DataService
  ]
})
export class DashboardModule { }
