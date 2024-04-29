import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyConversionService } from './currency-conversion.service'; // Import CurrencyConversionService

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    AppRoutingModule
  ],
  providers: [CurrencyConversionService], // Provide CurrencyConversionService
  bootstrap: [AppComponent]
})
export class AppModule { }
