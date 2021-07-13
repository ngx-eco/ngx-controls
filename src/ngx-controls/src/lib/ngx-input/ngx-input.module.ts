// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project
import { NgxInputComponent } from './ngx-input.component';



@NgModule({
  declarations: [
    NgxInputComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgxInputComponent,
  ],
})
export class NgxInputModule { }
