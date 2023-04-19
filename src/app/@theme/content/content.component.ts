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
  index:any;

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
        // console.log(this.userdata,"userdata");
        this.index=this.userdata.index
        
      });

      this.service.ohlc(this.uuid).subscribe((param) => {
        this.uuiddata = param;
        // console.log(param);
        
        
        // console.log(this.uuiddata,"ohlcdata");
        this.ohlcdata = this.uuiddata.data.coins.filter((value) => {
          return value.uuid == this.uuid;
        });
        // console.log(this.uuiddata,"ohlcdata");  
        
      });
      
      this.service.show().subscribe((param) => {
        this.uuiddata = param;
        console.log(param);
        
        
        // console.log(this.uuiddata,"ohlcdata");
        // this.ohlcdata = this.uuiddata.data.coins.filter((value) => {
        //   return value.uuid == this.uuid;
        // });
        // console.log(this.uuiddata,"ohlcdata");  
        
      });
    }
  }
}
