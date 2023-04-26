import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchdataService } from '../service/fetchdata.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  uuid:any;
  marketdata:any;
  
  constructor(
    private service: FetchdataService,
    private activateroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.uuid = this.activateroute.snapshot.paramMap.get('uuid');

    if(this.uuid){

      this.service.markets(this.uuid).subscribe((param) => {
        this.marketdata = param
        // this.exhchangesdata=this.exhchangedata.data.exchanges;

        // this.coindata=this.uuiddata.data.coin;
        console.log(this.marketdata,"emarkersresdata");    
      });
    }
  }

}

