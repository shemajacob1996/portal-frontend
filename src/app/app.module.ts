import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HorizontalStepperComponent } from './horizontal-stepper/horizontal-stepper.component';
import { HeadersComponent } from './shared/headers/headers.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoaderInterceptor, LoaderService } from './loader-interceptor.service';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";
import { RadioButtonModule } from "primeng/radiobutton";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { ToastModule } from "primeng/toast";
import {ChipsModule} from 'primeng/chips';
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FileDropDirective } from "./file-drop.directive";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { CheckboxModule } from "primeng/checkbox";
import { ContainerDetailsComponent } from './container-details/container-details.component';
import { TwoDigitDecimalNumberDirective } from './two-digit-decimal-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HorizontalStepperComponent,
    HeadersComponent,
    TwoDigitDecimalNumberDirective,
    FileDropDirective,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChipsModule,
    BrowserModule,
    ConfirmDialogModule,
    TooltipModule,
    TableModule,
    BrowserAnimationsModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    RadioButtonModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    CheckboxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ MessageService,
    ConfirmationService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
