import { Component } from '@angular/core';
import { CurrencyConversionService } from '../currency-conversion.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
  usdAmount: number = 0;
  inrAmount: number = 0;
  eurAmount: number = 0;
  jpyAmount: number = 0;

  constructor(private currencyService: CurrencyConversionService) { }

  convert() {
    this.inrAmount = this.currencyService.convertToInr(this.usdAmount);
    this.eurAmount = this.currencyService.convertToEur(this.usdAmount);
    this.jpyAmount = this.currencyService.convertToJpy(this.usdAmount);
  }
}
