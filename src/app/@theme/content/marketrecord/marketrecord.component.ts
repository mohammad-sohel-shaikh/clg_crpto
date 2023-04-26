import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchdataService } from '../../service/fetchdata.service';

@Component({
  selector: 'app-marketrecord',
  templateUrl: './marketrecord.component.html',
  styleUrls: ['./marketrecord.component.scss']
})
export class MarketrecordComponent implements OnInit {

  market5data: any;
  uuid: any;
  uuiddata:any
  marketsdata:any
  constructor(private service: FetchdataService,private activateroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.uuid = this.activateroute.snapshot.paramMap.get('uuid');


    this.service.markets(this.uuid).subscribe((param) => {
      this.uuiddata = param
      this.marketsdata = this.uuiddata.data.markets;
      let record5data = [];

      for (let i = 0; i < this.marketsdata.length; i++) {

        if (i == 5) {
          break;
        }
        else {
          record5data.push(this.marketsdata[i])
        }
      }
      this.market5data = record5data;
      console.log(this.market5data,"market 5d st");
      
    });
  }

}

