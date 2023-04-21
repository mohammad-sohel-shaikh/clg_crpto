import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../service/fetchdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss']
})
export class ExchangesComponent implements OnInit {

  uuid:any;
  exhchangedata:any;
  
  constructor(
    private service: FetchdataService,
    private activateroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.uuid = this.activateroute.snapshot.paramMap.get('uuid');

    if(this.uuid){

      this.service.exchanges(this.uuid).subscribe((param) => {
        this.exhchangedata = param
        // this.exhchangesdata=this.exhchangedata.data.exchanges;

        // this.coindata=this.uuiddata.data.coin;
        console.log(this.exhchangedata,"exhchangesdata");    
      });
    }
  }

}
