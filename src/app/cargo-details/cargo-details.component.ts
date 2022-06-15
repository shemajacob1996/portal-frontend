import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargo-details',
  templateUrl: './cargo-details.component.html',
  styleUrls: ['./cargo-details.component.scss']
})
export class CargoDetailsComponent implements OnInit {
  

  shipper: string = "FOSHAN SHUNDAE YONG LI HUA SPORTSWEAR CO.,LTD NO.5 XINGYE MID.RD.,LUNJIAO INDUSTRIAL ZONE,SHUNDE DISTRICT FOSHAN CITY GUANGDONG CHINA ";
  consignee: string = "KUEHNE & NAGEL LTD GUANGZHOU BRANCH 20-21/F CENTER PLAZA NORTH TOWER 159 LINHEXI ROAD, TIANHE GUANGZHOU 510620.P.R,CHINA ";



  ngOnInit(): void {
    
  }

}