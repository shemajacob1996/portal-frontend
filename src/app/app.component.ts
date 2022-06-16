import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal-frontend';
  public isExpandRow: boolean = false;
  public invoice_party_placeholder = "Local charges are payable by this party if other than the shipper";



  onExpandRow(){
    this.isExpandRow = !this.isExpandRow;
  }
  upload(file:any){
    console.log(file)
  }

}

