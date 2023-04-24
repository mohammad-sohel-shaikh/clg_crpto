import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentComponent } from '../content.component';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss']
})
export class OtherInfoComponent implements OnInit {

  coindata: any;
  exchange5data:any;
  constructor(private content: ContentComponent, private route: ActivatedRoute, private router: Router) {

  }


  gotoExchanges() {
    this.router.navigate(['exchanges'], { relativeTo: this.route })
  }
  ngOnInit(): void {

    this.coindata = this.content.coindata
    this.exchange5data=this.content.recordata;
  console.log(this.exchange5data)
    console.log(this.coindata, "inside other-infi");

  }

}
