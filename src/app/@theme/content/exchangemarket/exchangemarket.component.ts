import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchdataService } from '../../service/fetchdata.service';
import { ContentComponent } from '../content.component';

@Component({
  selector: 'app-exchangemarket',
  templateUrl: './exchangemarket.component.html',
  styleUrls: ['./exchangemarket.component.scss']
})
export class ExchangemarketComponent implements OnInit {
  exchange5data: any;
  uuid: any;
  uuiddata:any
  exhchangesdata:any
  constructor(private content: ContentComponent, private service: FetchdataService,private activateroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.uuid = this.activateroute.snapshot.paramMap.get('uuid');

    this.exchange5data = this.content.recordata;
    console.log(this.exchange5data)
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
