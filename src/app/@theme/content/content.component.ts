import { FetchdataService } from './../service/fetchdata.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  uuid: any;
  
  uuiddata: any;
  userdata: any;
  ohlcdata:any;
  coindata:any;
  exhchangesdata:any;
  index:any;
  coinvolume:any;
  volumeArray:any;
  recordata:any


  constructor(
    private service: FetchdataService,
    private activateroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.uuid = this.activateroute.snapshot.paramMap.get('uuid');
    console.log(this.uuid, 'menuID');
    if (this.uuid) {

      this.service.users().subscribe((param) => {
        this.uuiddata = param;
        this.userdata = this.uuiddata.data.coins.filter((value) => {
          return value.uuid == this.uuid;
        });
        this.index=this.userdata.index
        
      });

      this.service.coin(this.uuid).subscribe((param) => {
        this.uuiddata = param
        this.coindata=this.uuiddata.data.coin;
        console.log(this.coindata,"coindata");    
      });

      this.service.exchanges(this.uuid).subscribe((param) => {
        this.uuiddata = param
        this.exhchangesdata=this.uuiddata.data.exchanges;
        let record5data=[];
        
        for(let i=0;i<this.exhchangesdata.length;i++){
          
          if(i==5){
            break;
          }
          else{
            record5data.push(this.exhchangesdata[i])
          }
        }
        this.recordata=record5data  
      });
    }
  }
}