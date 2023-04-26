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
  constructor(private content: ContentComponent, private route: ActivatedRoute, private router: Router) {

  }


  gotoExchanges() {
    this.router.navigate(['exchanges'], { relativeTo: this.route })
  }
  gotoMarkets() {
    this.router.navigate(['market'], { relativeTo: this.route })
  }
  ngOnInit(): void {

    this.coindata = this.content.coindata
    console.log(this.coindata, "inside other-infi");

  }

}
