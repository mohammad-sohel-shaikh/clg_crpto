import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchdataService } from '../../service/fetchdata.service';
import { ContentComponent } from '../content.component';

@Component({
  selector: 'app-exchangerecord',
  templateUrl: './exchangerecord.component.html',
  styleUrls: ['./exchangerecord.component.scss']
})
export class ExchangerecordComponent implements OnInit {

  exchange5data: any;
  uuid: any;
  uuiddata:any
  exhchangesdata:any
  constructor(private content: ContentComponent, private service: FetchdataService,private activateroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.uuid = this.activateroute.snapshot.paramMap.get('uuid');


    this.service.exchanges(this.uuid).subscribe((param) => {
      this.uuiddata = param
      this.exhchangesdata = this.uuiddata.data.exchanges;
      let record5data = [];

      for (let i = 0; i < this.exhchangesdata.length; i++) {

        if (i == 5) {
          break;
        }
        else {
          record5data.push(this.exhchangesdata[i])
        }
      }
      this.exchange5data = record5data
    });
  }

}
