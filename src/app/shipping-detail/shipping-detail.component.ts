import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.scss']
})
export class ShippingDetailComponent implements OnInit {
resData:any;
  constructor(private _httpClient:HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('../../assets/response.json').subscribe((res:any) =>{
    this.resData = res;
    })
  }

}
