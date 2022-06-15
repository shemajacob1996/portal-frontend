import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { interval } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
import { LoaderService } from './loader-interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal-frontend';
  isLoading!: boolean;
  
  constructor(
    private loaderService: LoaderService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.loaderService.isLoading
      .pipe(delayWhen(x => (x === true ? interval(0) : interval(1000))))
      .subscribe(x => {
        this.isLoading = x;
      });
  }

downloadTemplateFile(){}
downloadCsv(){}
dataUpload(event: any,file: any){}
toggleLang(){}
}
