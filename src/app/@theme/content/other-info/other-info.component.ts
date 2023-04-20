import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../content.component';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss']
})
export class OtherInfoComponent implements OnInit {

  coindata:any;
  constructor(private content:ContentComponent) {

   }

  ngOnInit(): void {
    this.coindata=this.content.coindata
    console.log(this.coindata,"inside other-infi");
    
  }

}
