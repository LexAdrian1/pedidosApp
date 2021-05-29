import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableRoutingModule,
    ReactiveFormsModule,
    FormsModule  
  ]
})
export class TableModule { }
