import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoDetailsComponent } from './cargo-details/cargo-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PartiesComponent } from './parties/parties.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';

const routes: Routes = [
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
