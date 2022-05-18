import { Component, OnInit } from '@angular/core';
import { Currency } from '../model/currency';
import { currencies } from '../model/currency-data-store';

@Component({
  selector: 'app-devise-list',
  templateUrl: './devise-list.component.html',
  styleUrls: ['./devise-list.component.css']
})
export class DeviseListComponent implements OnInit {
  public currencies: any = currencies;
  listCurrencies : Currency[] = [];

  

  constructor() {
   }

  ngOnInit(): void {
  }

}
