/**
 * Base module of the application
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importing App Component
import { AppComponent } from '@app/app.component';

// Importing modules
import { CoreModule } from '@core/core.module';
import { BasicThemeModule } from '@modules/theme/basic-theme.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { HomeComponent } from './modules/home-dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BasicThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
