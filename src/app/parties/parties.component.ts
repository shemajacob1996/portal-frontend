import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {
  public isExpandRow: boolean = false;
  public invoice_party_placeholder = "Local charges are payable by this party if other than the shipper";

  constructor() { }

  ngOnInit(): void {
  }

  onExpandRow(){
    this.isExpandRow = !this.isExpandRow;
  }

}
