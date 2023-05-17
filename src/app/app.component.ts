import { Component } from '@angular/core';
import costData from "./cost.json";  

interface Cost {  
  sku: String;  
  effectiveDate: String;  
  primeCostPerCase: Number;  
  foreignPrimeCostPerCase: Number;  
  currencyLabel: String;  
  currencyRate: Number;  
  currencyEffectiveDate: String;  
  dutyPaidCostPerCase: Number;  
  domesticChargesPerCase: Number; 
  estimatedPricePerSU: Number;  
  costOnly: String;  
  basisNumber: String;  
  comment: String;
  externalReferenceID: String;
  lastUpdatedBy: String
}  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  costs: Cost[] = costData;  
}
