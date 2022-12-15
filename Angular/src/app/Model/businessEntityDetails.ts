export class BusinessEntityDetails {
  nameOfBusiness: String = '';
  dateOfIncorporation: String = '';
  typeOfActivity: String = '';
  businessCategory: String = '';
  businessDescription: String = '';
  businessVintage: String = '';
  udhyamRegistrationNo: String = '';
  pslClassification: String = '';

  constructor(
    nameOfBusiness: String,
    dateOfIncorporation: String,
    typeOfActivity: String,
    businessCategory: String,
    businessDescription: String,
    businessVintage: String,
    udhyamRegistrationNo: String,
    pslClassification: String
  ) {
    this.nameOfBusiness = nameOfBusiness;
    this.dateOfIncorporation = dateOfIncorporation;
    this.typeOfActivity = typeOfActivity;
    this.businessCategory = businessCategory;
    this.businessDescription = businessDescription;
    this.businessVintage = businessVintage;
    this.udhyamRegistrationNo = udhyamRegistrationNo;
    this.pslClassification = pslClassification;
  }
}
