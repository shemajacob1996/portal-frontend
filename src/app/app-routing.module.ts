import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoDetailsComponent } from './cargo-details/cargo-details.component';
import { PartiesComponent } from './parties/parties.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
