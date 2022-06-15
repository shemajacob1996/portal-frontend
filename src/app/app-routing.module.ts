import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoDetailsComponent } from './cargo-details/cargo-details.component';
import { PartiesComponent } from './parties/parties.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';

const routes: Routes = [
  {
    path: 'parties',
    component: PartiesComponent
  },
  {
    path: 'cargo-details',
    component: CargoDetailsComponent
  },
  {
    path: 'upload-documents',
    component: UploadDocumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
