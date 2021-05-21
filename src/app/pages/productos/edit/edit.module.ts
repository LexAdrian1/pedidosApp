import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class EditModule { }
