import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

import { PurchaseComponent } from './components';
import { APIService } from './services';

@NgModule({
  declarations: [
    PurchaseComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDividerModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule
  ],
  exports: [
    PurchaseComponent
  ],
  providers: [
    APIService
  ]
})
export class PurchaseModule { }
