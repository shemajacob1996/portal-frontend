import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IDataModel } from '@app/shared/model/data.model';
@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {
  
  @Input()
  public partiesMasterData !: IDataModel;

  constructor() { }

  ngOnInit(): void {}

}
