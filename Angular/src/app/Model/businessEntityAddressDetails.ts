export class BusinessEntityAddressDetails {
  shopNo: String = '';
  addrressLine1: String = '';
  addrressLine2: String = '';
  pincode: String = '';
  city: String = '';
  state: String = '';
  noOfYearsAtAddress: String = '';
  occupationOfPremise: String = '';

  constructor(
    shopNo: String,
    addrressLine1: String,
    addrressLine2: String,
    pincode: String,
    city: String,
    state: String,
    noOfYearsAtAddress: String,
    occupationOfPremise: String
  ) {
    this.shopNo = shopNo;
    this.addrressLine1 = addrressLine1;
    this.addrressLine2 = addrressLine2;
    this.pincode = pincode;
    this.city = city;
    this.state = state;
    this.noOfYearsAtAddress = noOfYearsAtAddress;
    this.occupationOfPremise = occupationOfPremise;
  }
}
