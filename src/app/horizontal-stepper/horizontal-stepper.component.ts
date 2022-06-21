import { Component, OnInit } from '@angular/core';
import { UtilService } from '@app/util.service';
@Component({
  selector: 'app-horizontal-stepper',
  templateUrl: './horizontal-stepper.component.html',
  styleUrls: ['./horizontal-stepper.component.scss']
})
export class HorizontalStepperComponent implements OnInit {
  constructor(private _utilService : UtilService) { }
  ngOnInit(): void {
  }
activeCard(value: any){
  this._utilService.activeStepper.next(value)
}
}
