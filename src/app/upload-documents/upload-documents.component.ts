import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.scss']
})
export class UploadDocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  upload(file:any){
    console.log(file)
  }

}
