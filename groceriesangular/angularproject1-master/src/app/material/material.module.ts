import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule
    
  ],
  exports:[
    MatButtonModule,
    MatDividerModule,
    MatListModule
    
  ]
})
export class MaterialModule { }
