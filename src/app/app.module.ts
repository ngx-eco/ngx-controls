// Angular
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Libs
import { NgxThemesModule } from '@ngx-eco/ngx-themes';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Core

// Configs
import { NGX_THEMES_CONFIG } from './core/configs/ngx-themes.config';

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
    NgxThemesModule.forRoot(NGX_THEMES_CONFIG),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
