import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../content.component';

@Component({
  selector: 'app-exchangemarket',
  templateUrl: './exchangemarket.component.html',
  styleUrls: ['./exchangemarket.component.scss']
})
export class ExchangemarketComponent implements OnInit {
  exchange5data:any;

  constructor(private content:ContentComponent) {

  }
  ngOnInit(): void {
    this.exchange5data=this.content.recordata;
  console.log(this.exchange5data)
  }

}
