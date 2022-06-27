import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
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

  constructor(private _utilService: UtilService,
     private _httpService: HttpService, 
     private activatedRoute: ActivatedRoute,
     private router: Router, ) { }
     refNum;
     knEdit;
     notFound :boolean = false;
  
  ngOnInit(): void {
    this._utilService.activeStepper.subscribe((res: any) => {
      document.getElementById(res)?.scrollIntoView();
    });
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(x => {
      const referenceNumber = this.activatedRoute.snapshot.queryParams["ref-num"] || this.activatedRoute.snapshot.queryParams["token"];
      this._httpService.refNum = referenceNumber;
      this.refNum = referenceNumber;
      this.knEdit = this.activatedRoute.snapshot.queryParams.mode;
      // if (this.refNum === undefined) {
      //   this.notFound = true;
      //   this.router.navigate(["/404"]);
      // } else {
        this.getMasterAPIData();
      // }
    });
    
  }

  getMasterAPIData(){
    const isTokenMode = this.activatedRoute.snapshot.queryParams['token'] ? true : false;
    this._httpService.getMasterResponseData(this.refNum,isTokenMode).subscribe((response: IResponse) => {
      this.rootMasterData = response?.data;
    });
  }

  ngOnDestroy(): void {
    this._utilService.activeStepper.unsubscribe();
  }



}

