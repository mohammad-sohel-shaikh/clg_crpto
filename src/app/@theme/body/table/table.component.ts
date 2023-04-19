import { FetchdataService } from './../../service/fetchdata.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentComponent } from '../../content/content.component';
import { NbTreeGridHeaderCellDirective } from '@nebular/theme';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  coinData: any;
  iteams: any;
  constructor(private service: FetchdataService) {
    // data from api
    this.service.users().subscribe((param) => {
      this.coinData = param;
    });
  }
  
  getData(flt:string) {

    const table = document.getElementById('myTable');
    const tableRows = table.getElementsByTagName('tr');

    for (let i = 0; i < tableRows.length; i++) {
      const row = tableRows[i];
      const cells = row.getElementsByTagName('td');
      let foundMatch = false;

      for (let j = 0; j < cells.length; j++) {
        const cell = cells[j];

        if (cell.innerHTML.toLowerCase().includes(flt)) {
          foundMatch = true;
          break;
        }
      }

      if (foundMatch) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    }
  }
// let betterTime=(func:string, delay:number)=>{
//   let timer;
//   return function(){
//     let context = this, arg =arguments;
//     clearTimeout(timer);
//     timer = setTimeout(()=>{
//       func.apply(context, arg);
//     },delay);
//   }
// }
// let getBetterData = betterTime(getData, 300);

  ngOnInit(): void {}
}
