import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentComponent } from '../content.component';
import { FetchdataService } from '../../service/fetchdata.service';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss']
})
export class OtherInfoComponent implements OnInit {

  uuid:any;
  coindata: any;
  data: any;
  exhchangedata:any;
  constructor(private content: ContentComponent,private service:FetchdataService, private route: ActivatedRoute, private router: Router) {

  }


  gotoExchanges() {
    this.router.navigate(['exchanges'], { relativeTo: this.route })
  }
  ngOnInit(): void {

    this.uuid = this.route.snapshot.paramMap.get('uuid');

    this.coindata = this.content.coindata
    console.log(this.coindata, "inside other-infi");
    this.service.exchanges(this.uuid).subscribe((param) => {
      this.data = param;
      let dummy=[]
      for(let i=0;i<this.data.data.exchanges;i++){
        if(i==5){
          break
            dummy.push(this.data.data.exchanges[i]);
          }
        }
        this.exhchangedata=dummy;
      // this.exhchangesdata=this.exhchangedata.data.exchanges;

      // this.coindata=this.uuiddata.data.coin;
      console.log(this.exhchangedata,"exhchangesdata");    
    });
  }

}
