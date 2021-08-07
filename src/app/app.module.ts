// Angular
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Project
import { NgxInputModule } from '@ngx-eco/ngx-controls';
import { NgxTextareaModule } from '@ngx-eco/ngx-controls';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxInputModule,
    AppRoutingModule,
    NgxTextareaModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
