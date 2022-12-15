export class BusinessInformation {
  id: String = '';
  nameOfBusiness: String = '';
  dateOfIncorporation: String = '';
  typeOfActivity: String = '';
  businessCategory: String = '';
  businessDescription: String = '';
  businessVintage: String = '';
  udhyamRegistrationNo: String = '';
  pslClassification: String = '';
  shopNo: String = '';
  addrressLine1: String = '';
  addrressLine2: String = '';
  pincode: String = '';
  city: String = '';
  state: String = '';
  noOfYearsAtAddress: String = '';
  occupationOfPremise: String = '';

  constructor(
    id: String,
    nameOfBusiness: String,
    dateOfIncorporation: String,
    typeOfActivity: String ,
    businessCategory: String,
    businessDescription: String,
    businessVintage: String ,
    udhyamRegistrationNo: String,
    pslClassification: String ,
    shopNo: String ,
    addrressLine1: String,
    addrressLine2: String,
    pincode: String,
    city: String ,
    state: String ,
    noOfYearsAtAddress: String,
    occupationOfPremise: String
  ) {
    this.id=id;
    this.nameOfBusiness=nameOfBusiness;
    this.dateOfIncorporation=dateOfIncorporation;
    this.typeOfActivity=typeOfActivity;
    this.businessCategory=businessCategory;
    this.businessDescription=businessDescription;
    this.businessVintage=businessVintage;
    this.udhyamRegistrationNo=udhyamRegistrationNo;
    this.pslClassification=pslClassification;
    this.shopNo=shopNo;
    this.addrressLine1=addrressLine1;
    this.addrressLine2=addrressLine2;
    this.pincode=pincode;
    this.city=city;
    this.state=state;
    this.noOfYearsAtAddress=noOfYearsAtAddress;
    this.occupationOfPremise=occupationOfPremise;
  }
}
