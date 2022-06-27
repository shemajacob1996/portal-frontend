import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { IDataModel, IResponse } from './shared/model/data.model';
import { UtilService } from './util.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public rootMasterData !: IDataModel;
  title = 'portal-frontend';

  constructor(private _utilService: UtilService, private _httpService: HttpService ) { }
  
  ngOnInit(): void {
    this._utilService.activeStepper.subscribe((res: any) => {
      document.getElementById(res)?.scrollIntoView();
    });

    this.getMasterAPIData();
  }

  getMasterAPIData(){
    this._httpService.getMasterResponseData().subscribe((response: IResponse) => {
      this.rootMasterData = response?.data;
    });
  }

  ngOnDestroy(): void {
    this._utilService.activeStepper.unsubscribe();
  }



}

