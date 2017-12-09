import { Component, OnInit } from '@angular/core';
import { CriptoDataService } from '../cripto-data.service';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  objectKeys = Object.keys;
  cryptos: any;
  private alive: boolean; 

  constructor(private _data: CriptoDataService) {
    this.alive = true;
  }

  ngOnInit() {
    this.refreshData();

// get our data every subsequent 10 seconds
    IntervalObservable.create(10000)
      .subscribe(() => {
        this.refreshData();
      });
  }

refreshData() {
  this._data.getPrices()
    .subscribe(res => {
      this.cryptos = res;
      console.log(res);
    });
}


}
