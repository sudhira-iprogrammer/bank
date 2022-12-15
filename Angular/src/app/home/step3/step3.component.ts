import { Component } from '@angular/core';
import { BankInfoService } from 'src/app/app-service/bank-info.service';
import { BusinessInformation } from 'src/app/Model/businessInformation';
import { SoleProprietorDetails } from 'src/app/Model/soleProprietorDetail';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
})
export class Step3Component {
  clickBtn = false;
  businessInfo: BusinessInformation = new BusinessInformation(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  );

  soleProprietor: SoleProprietorDetails = new SoleProprietorDetails(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  );

  constructor(private service: BankInfoService) {
    // this.businessInfo = service.businessInfo;
  }

  onCheck() {
    if (this.clickBtn == false) {
      this.soleProprietor.houseNo = this.businessInfo.shopNo;
      this.soleProprietor.addrressLine1 = this.businessInfo.addrressLine1;
      this.soleProprietor.addrressLine2 = this.businessInfo.addrressLine2;
      this.soleProprietor.pincode = this.businessInfo.pincode;
      this.soleProprietor.city = this.businessInfo.city;
      this.soleProprietor.state = this.businessInfo.state;
      this.soleProprietor.occupationOfPremise =
        this.businessInfo.occupationOfPremise;
      this.soleProprietor.noOfYearsAtAddress =
        this.businessInfo.noOfYearsAtAddress;
      this.clickBtn = true;
    } else {
      this.soleProprietor.houseNo = '';
      this.soleProprietor.addrressLine1 = '';
      this.soleProprietor.addrressLine2 = '';
      this.soleProprietor.pincode = '';
      this.soleProprietor.city = '';
      this.soleProprietor.state = '';
      this.soleProprietor.occupationOfPremise = '';
      this.soleProprietor.noOfYearsAtAddress = '';
      this.clickBtn = false;
    }
  }
}
