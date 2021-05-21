import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class NewModule { }
