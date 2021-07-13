// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project
import { NgxTextareaComponent } from './ngx-textarea.component';



@NgModule({
  declarations: [
    NgxTextareaComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgxTextareaComponent,
  ],
})
export class NgxTextareaModule { }
