import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {
  private usdToInrRate: number = 73.54; // Example conversion rates
  private usdToEurRate: number = 0.84;
  private usdToJpyRate: number = 109.76;

  constructor() { }

  convertToInr(amount: number): number {
    return amount * this.usdToInrRate;
  }

  convertToEur(amount: number): number {
    return amount * this.usdToEurRate;
  }

  convertToJpy(amount: number): number {
    return amount * this.usdToJpyRate;
  }
}
