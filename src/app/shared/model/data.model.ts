export interface IResponse {
    code: number;
    status: string;
    message: string;
    data: IDataModel
}

export interface IDataModel {
    trackingNumber: string;
    docType: string;
    balDocType: string;
    shipmentType: string;
    shipperAddress: string | null;
    consigneeAddress: string;
    notifyPartyAddress: string | null;
    notifyPartyAddressTwo: string | null;
    placeOfReceipt: string;
    preCarriageBy: string;
    portOfLoading: string;
    oceanVessel: string;
    voyageNumber: string;
    portOfTransshipment: string;
    portOfDischarge: string;
    placeOfDelivery: string | null;
    movement: string;
    freightPayableAt: string;
    invoiceParty: string;
    blInstruction: string | null;
    docContactEmails: string;
    telexRelease: boolean;
    showHsCode: boolean;
    status: string;
    siCutOffDate: string | null;
    logoUrl: string;
    defaultLang: string;
    deliveryAgent: string;
    exportOffice: string;
    bal: string;
    freightPaymentTerm: string;
    carrierCode: string;
    pol: string;
    fcrRequired: boolean;
    containers: Array<IContainer>;
    shipperPhoneNumber: number | string | null;
    shipperVatCode: string | null;
    consigneeVatCode: string | null;
    consigneeContactName: string | null
    consigneeContactPhoneNumber: string | number | null;
    notifyVatCode: string | null;
    addCountryNames: string | null;
}

export interface IContainer {
    id: string;
    containerNumber: string;
    containerType: IContainerType;
    cargoDetails: Array<ICargoDetails>;
    totalGrossWeight: number;
    totalMeasurement: number;
    totalContainerPackages: number;
    sealNumber: string;
    sequenceNumber: number;
}

export interface ICargoDetails {
    id: string;
    hscode: string,
    marksNumbers: string,
    goodsDescription: string,
    grossWeight: number,
    measurement: number,
    numberOfPackages: number,
    packageTypeDTO ?: IPackageTypeDTO | any;
}

export interface IContainerType {
    id?: string;
    ediContainerType: string;
    cielUnitType: string;
    typeName: string;
}

export interface IPackageTypeDTO {
    id ?: string,
    type ?: string,
    name: string;
}