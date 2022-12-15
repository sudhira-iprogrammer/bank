export class SoleProprietorDetails {
  firstName: String = "";
  middleName: String = "";
  lastName: String = "";
  dateOfBirth: String = "";
  personalEmailId: String = "";
  proprietorFatherName: String = "";
  proprietorFatherMiddleName: String = "";
  proprietorFatherLastName: String = "";
  motherMaidanName: String = "";
  totalExperienceInCurrentBusiness: String = "";
  education: String = "";
  gender: String = "";
  maritalStatus: String = "";
  houseNo: String = "";
  addrressLine1: String = "";
  addrressLine2: String = "";
  pincode: String = "";
  city: String = "";
  state: String = "";
  noOfYearsAtAddress: String = "";
  occupationOfPremise: String = "";

  constructor(
    firstName: String,
    middleName: String,
    lastName: String,
    dateOfBirth: String ,
    personalEmailId: String,
    proprietorFatherName: String,
    proprietorFatherMiddleName: String ,
    proprietorFatherLastName: String,
    motherMaidanName: String ,
    totalExperienceInCurrentBusiness: String,
    education: String,
    gender: String,
    maritalStatus: String,
    houseNo: String ,
    addrressLine1: String,
    addrressLine2: String,
    pincode: String,
    city: String ,
    state: String ,
    noOfYearsAtAddress: String,
    occupationOfPremise: String
  ) {
    this.firstName=firstName;
    this.middleName=middleName;
    this.lastName=lastName;
    this.dateOfBirth=dateOfBirth;
    this.personalEmailId=personalEmailId;
    this.proprietorFatherName=proprietorFatherName;
    this.proprietorFatherMiddleName=proprietorFatherMiddleName;
    this.proprietorFatherLastName=proprietorFatherLastName;
    this.motherMaidanName=motherMaidanName;
    this.totalExperienceInCurrentBusiness=totalExperienceInCurrentBusiness;
    this.education=education;
    this.gender=gender;
    this.maritalStatus=maritalStatus;
    this.houseNo=houseNo;
    this.addrressLine1=addrressLine1;
    this.addrressLine2=addrressLine2;
    this.pincode=pincode;
    this.city=city;
    this.state=state;
    this.noOfYearsAtAddress=noOfYearsAtAddress;
    this.occupationOfPremise=occupationOfPremise;
  }
}
