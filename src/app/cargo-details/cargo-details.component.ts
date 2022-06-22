import { Component, OnInit } from '@angular/core';
import { CARGODETAILS } from '@app/app.constant';






  
@Component({
  selector: 'app-cargo-details',
  templateUrl: './cargo-details.component.html',
  styleUrls: ['./cargo-details.component.scss']
})


export class CargoDetailsComponent implements OnInit {

  public isExpandRow: boolean = false;
  public invoice_party_placeholder = "Local charges are payable by this party if other than the shipper";
  containerNumber: any;
  cargoDetailsData = CARGODETAILS

  constructor()  {
    
  }
  

  onExpandRow(){
    this.isExpandRow = !this.isExpandRow;
  }

  // shipper: string = "FOSHAN SHUNDAE YONG LI HUA SPORTSWEAR CO.,LTD NO.5 XINGYE MID.RD.,LUNJIAO INDUSTRIAL ZONE,SHUNDE DISTRICT FOSHAN CITY GUANGDONG CHINA ";
  // consignee: string = "KUEHNE & NAGEL LTD GUANGZHOU BRANCH 20-21/F CENTER PLAZA NORTH TOWER 159 LINHEXI ROAD, TIANHE GUANGZHOU 510620.P.R,CHINA ";

 

  ngOnInit() {
    console.log('s',this.cargoDetailsData)
    this.getContainerDetails()
  }
getContainerDetails(){
 
   
  
}
}
