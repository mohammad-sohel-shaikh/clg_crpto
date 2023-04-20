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
  uuiddata:any;
  exhchangesdata:any;
  volumeArray:any;

  constructor(
    private service: FetchdataService,
    private activateroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.uuid = this.activateroute.snapshot.paramMap.get('uuid');

    if(this.uuid){

      this.service.exchanges(this.uuid).subscribe((param) => {
        this.uuiddata = param
        this.exhchangesdata=this.uuiddata.data.exchanges;
        let hVolume=[];
        for(let item of this.exhchangesdata){
          hVolume.push(item["24hVolume"])
        }
        this.volumeArray=hVolume
        console.log(this.volumeArray,"volume");
        
        // this.coindata=this.uuiddata.data.coin;
        console.log(this.exhchangesdata,"exhchangesdata");    
      });
    }
  }

}
