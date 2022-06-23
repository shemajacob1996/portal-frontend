import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HttpService } from './http.service';
import { UtilService } from './util.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  constructor(private _utilService : UtilService,
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,){}
  title = 'portal-frontend';
  refNum: string;
  knEdit :any;
  notFound = false;

  ngOnInit(): void {
    this._utilService.activeStepper.subscribe((res : any)=>{
      document.getElementById(res)?.scrollIntoView();
    })
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(x => {
      const referenceNumber = this.activatedRoute.snapshot.queryParams["ref-num"] || this.activatedRoute.snapshot.queryParams["token"];
      this.httpService.refNum = referenceNumber;
      this.refNum = referenceNumber;
      this.knEdit = this.activatedRoute.snapshot.queryParams.mode;
      if (this.refNum === undefined) {
        this.notFound = true;
        this.router.navigate(["/404"]);
      } else {
        // this.getShippingData();
      }
    });
  }
  ngOnDestroy(): void {
 this._utilService.activeStepper.unsubscribe();
  }
 


}

