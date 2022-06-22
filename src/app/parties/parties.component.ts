import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {
  resData:any
  public isExpandRow: boolean = false;
  public invoice_party_placeholder = "Local charges are payable by this party if other than the shipper";

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
this._httpClient.get('../../assets/response.json').subscribe((res : any) => {
  this.resData = res;
  // console.log(this.resData.data.containers[0].sealNumber)


}
)  }
  onExpandRow(){
    this.isExpandRow = !this.isExpandRow;
  }

}
