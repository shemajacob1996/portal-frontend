import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HorizontalStepperComponent } from './horizontal-stepper/horizontal-stepper.component';
import { HeadersComponent } from './shared/headers/headers.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HorizontalStepperComponent,
    HeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
