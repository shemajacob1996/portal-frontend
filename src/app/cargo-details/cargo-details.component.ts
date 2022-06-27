import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AppConstant } from '@app/shared/constants/constants';
import { IContainerType, IDataModel, IPackageTypeDTO, ICargoDetails } from '@app/shared/model/data.model';

@Component({
  selector: 'app-cargo-details',
  templateUrl: './cargo-details.component.html',
  styleUrls: ['./cargo-details.component.scss']
})
export class CargoDetailsComponent implements OnInit, OnChanges {

  @Input()
  public cargoMasterData !: IDataModel;

  public containerType : IContainerType[] = AppConstant.containerType;
  public packageTypeDTO : IPackageTypeDTO[] = AppConstant.packageTypeDTO;
  public isShipmentType: string = '';
  public containerDetailsForm !: FormGroup;
  public copyData: any;
  public isExpandRow: boolean = false;



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildContainerDetailForm();
  }

  ngOnChanges(): void {
    //const cargoDetailLength: number = this.cargoMasterData?.containers[0]?.cargoDetails.length;
    this.isShipmentType = this.cargoMasterData?.shipmentType;
    //this.createFormGrpAsPerResponse(cargoDetailLength);
    this.addCargoDetailForm();
    this.patchValueForContainerForm();
  }

  buildContainerDetailForm() {
    this.containerDetailsForm = this.formBuilder.group({
      containerNumber: [''],
      containerType: [''],
      sealNumber: [''],
      totalContainerPackages: [''],
      totalGrossWeight: [''],
      totalMeasurement: [''],
      cargoDetails: this.formBuilder.array([])
    });
  }

  get cargoDetails(): FormArray {
    return this.containerDetailsForm?.get('cargoDetails') as FormArray;
  }

  newCargoDetailForm(): FormGroup {
    return this.formBuilder.group({
      hscode: [''],
      marksNumbers: [''],
      goodsDescription: [''],
      grossWeight: [''],
      measurement: [''],
      numberOfPackages: [''],
      packageTypeDTO: ['']
    });
  }

  addCargoDetailForm(): void {
    this.cargoDetails?.push(this.newCargoDetailForm());  
  }

  removeCargoDetailForm(index: number): void {
    this.cargoDetails?.removeAt(index);
  }

  patchValueForContainerForm(): void{
    const containerRes = this.cargoMasterData?.containers[0];
    const cargoDetailInitial = this.cargoMasterData?.containers[0].cargoDetails[0];
    this.containerDetailsForm?.patchValue({
      cargoDetails: [cargoDetailInitial],
      containerNumber: containerRes?.containerNumber,
      containerType: containerRes?.containerType?.ediContainerType,
      sealNumber: containerRes?.sealNumber,
      totalContainerPackages: containerRes?.totalContainerPackages,
      totalGrossWeight: containerRes?.totalGrossWeight,
      totalMeasurement: containerRes?.totalMeasurement
    });

    this.containerDetailsForm?.patchValue({
      cargoDetails: [
        {
          packageTypeDTO: cargoDetailInitial?.packageTypeDTO?.type
        }
      ]
    });
  }

  onSubmit(): void {
    console.log("this form : ", this.containerDetailsForm);
  }

  copyCargoDetailForm(index: any): void {
    this.copyData = this.containerDetailsForm.value.cargoDetails[index];
  }

  onClickPasteIcon(): void{
    let cargoDetailArr: ICargoDetails[] = [];
    this.containerDetailsForm.value.cargoDetails.forEach((element: any, i: any) => {
      cargoDetailArr.push(this.copyData);
      cargoDetailArr[i].packageTypeDTO = this.cargoMasterData?.containers[0]?.cargoDetails[i]?.packageTypeDTO?.type;
    });
    this.containerDetailsForm.patchValue({
      cargoDetails: cargoDetailArr
    });   
    this.containerDetailsForm.updateValueAndValidity();
  }
  
  onExpandRow(): void{
    this.isExpandRow = !this.isExpandRow;
  }
}
