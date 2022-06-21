import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilService } from './util.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  constructor(private _utilService : UtilService){}
  title = 'portal-frontend';
  ngOnInit(): void {
    this._utilService.activeStepper.subscribe((res : any)=>{
      document.getElementById(res)?.scrollIntoView();
    })
  }
  ngOnDestroy(): void {
 this._utilService.activeStepper.unsubscribe();
  }
 


}

