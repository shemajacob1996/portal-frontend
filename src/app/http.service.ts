import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { IResponse } from "./shared/model/data.model";
@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private reqUrl = '../assets/response.json';
    
    constructor(private _httpClient: HttpClient){}

    getMasterResponseData(): Observable<IResponse> {
        return this._httpClient.get(this.reqUrl) as Observable<IResponse>
    }
}