import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HorizontalStepperComponent } from './horizontal-stepper/horizontal-stepper.component';
import { HeadersComponent } from './shared/headers/headers.component';
import { PartiesComponent } from './parties/parties.component';
import { CargoDetailsComponent } from './cargo-details/cargo-details.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor, LoaderService } from './loader-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HorizontalStepperComponent,
    HeadersComponent,
    PartiesComponent,
    CargoDetailsComponent,
    UploadDocumentsComponent,
    ShippingDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
