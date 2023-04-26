import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FetchdataService {
  uuid: any;
  
  url = `https://coinranking1.p.rapidapi.com/coins`;
  url2: any;;
  url3:any;
  url4:any;
  url5:any;

  constructor(
    private http: HttpClient,
    private activateroute: ActivatedRoute
  ) {}

  users() {
    
    let headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        // 'f6b951e38cmsha6b1c7b5037e4c9p1dbdfejsnfe2472f2ea04'
        '86733f4be8msh687166c46bd6b7cp10ee1djsn35f9fee51666'
      )
      .set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');

    return this.http.get(this.url, { headers });
  }

  ohlc(uuid:any) {
   
    this.url2 = `https://coinranking1.p.rapidapi.com/coin/${uuid}/ohlc`;
   
    let headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        // 'f6b951e38cmsha6b1c7b5037e4c9p1dbdfejsnfe2472f2ea04'
        '86733f4be8msh687166c46bd6b7cp10ee1djsn35f9fee51666'
      )
      .set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');

    return this.http.get(this.url2, { headers });
  }
  coin(uuid:any) {
   
    this.url3 = `https://coinranking1.p.rapidapi.com/coin/${uuid}`;
    // this.url3= 'https://blockcc1.p.rapidapi.com/api/v3/symbols';
   
    let headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '86733f4be8msh687166c46bd6b7cp10ee1djsn35f9fee51666'
      )
      .set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');

    return this.http.get(this.url3, { headers });
  }

  exchanges(uuid:any) {
   
    // this.url4 = `https://coinranking1.p.rapidapi.coin/${uuid}/exchanges`;
    this.url4 = `https://coinranking1.p.rapidapi.com/coin/${uuid}/exchanges`;
    // this.url3= 'https://blockcc1.p.rapidapi.com/api/v3/symbols';
   
    let headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '86733f4be8msh687166c46bd6b7cp10ee1djsn35f9fee51666'
      )
      .set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');

    return this.http.get(this.url4, { headers });
  }
  markets(uuid:any) {
   
    // this.url4 = `https://coinranking1.p.rapidapi.coin/${uuid}/exchanges`;
    this.url5 = `https://coinranking1.p.rapidapi.com/coin/${uuid}/markets`;
    // this.url3= 'https://blockcc1.p.rapidapi.com/api/v3/symbols';
   
    let headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '86733f4be8msh687166c46bd6b7cp10ee1djsn35f9fee51666'
      )
      .set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');

    return this.http.get(this.url5, { headers });
  }
}
