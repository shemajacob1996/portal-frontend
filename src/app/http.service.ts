import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { empty, BehaviorSubject } from "rxjs";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private httpClient: HttpClient) { }
  Status: any;
  private stepStatusDataSubject = new BehaviorSubject<string>(null);
//   baseUrl = environment.baseUrl;
  refNum: string;
  shippingId: string;

  getStepStatus(): Observable<any> {
    return this.stepStatusDataSubject.asObservable();
  }

  setStepStatus(status: any){
    this.stepStatusDataSubject.next(status)
  }
}