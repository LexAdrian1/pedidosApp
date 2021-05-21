import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ListRoutingModule
  ]
})
export class ListModule { }
