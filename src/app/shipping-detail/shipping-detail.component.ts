import { Component, Input, OnInit } from '@angular/core';
import { IDataModel } from '@app/shared/model/data.model';
@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.scss']
})
export class ShippingDetailComponent implements OnInit {
  
  @Input()
  public shippingMasterData !: IDataModel

  constructor() { }

  ngOnInit(): void {}

}
