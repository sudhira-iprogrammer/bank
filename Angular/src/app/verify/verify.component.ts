import { compileNgModule, IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BankInfoService } from '../app-service/bank-info.service';
import { BusinessEntityAddressDetails } from '../Model/businessEntityAddressDetails';
import { BusinessEntityDetails } from '../Model/businessEntityDetails';
import { BusinessInformation } from '../Model/businessInformation';
import { Registration } from '../Model/Registration';
import { verifyUser } from '../verify.model';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],
})
export class VerifyComponent implements OnInit {
  OTPdisplay = false;
  validPhone = false;
  validPan = false;
  validOtp = false;
  green1 = false;
  green2 = false;
  exist1 = false;
  exist2 = false;
  disabled = false;
  phone: String = '';
  pan: String = '';
  otp: String = '';
  check: String = '';
  panIsNotValid = false;
  status: any;

  // verify: verifyUser = new verifyUser('', '', '', '');
  verify: Registration = new Registration('', '', '', '');
  businessEntityDetails: BusinessEntityDetails = new BusinessEntityDetails(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  );
  businessEntityAddressDetails: BusinessEntityAddressDetails =
    new BusinessEntityAddressDetails('', '', '', '', '', '', '', '');
  message: any;

  constructor(private router: Router, private service: BankInfoService) {}
  ngOnInit(): void {}

  public registerNow() {
    let resp = this.service.doRegistration(this.verify);
    resp.subscribe((data) => {
      this.status = data.status;
      let jsonObj = JSON.parse(data.body);
      let verifyReturn = jsonObj as Registration;
      this.panIsNotValid = true;
      this.service.registration = verifyReturn;
      // this.businessInfo.id = verifyReturn.id;
      // this.businessEntityDetails=verifyReturn.businessEntityDetail

      if (data.status == 208) {
        let resp1 = this.service.getBusinessEntityDetails();
        resp1.subscribe((data) => {
          let jsonObj = JSON.parse(data.body);
          let businessDetailsReturn = jsonObj as BusinessEntityDetails;
          this.businessEntityDetails = businessDetailsReturn;
          this.service.businessEntityDetails = businessDetailsReturn;
        });
  
        let resp2 = this.service.getBusinessEntityAddressdetails();
        resp2.subscribe((data) => {
          let jsonObj = JSON.parse(data.body);
          let businessAddressDetailsReturn =
            jsonObj as BusinessEntityAddressDetails;
          this.service.businessEntityAddressDetails =
            businessAddressDetailsReturn;
        });
      }

      if (
        verifyReturn.phoneNumber == 'Phone Number is Not Valid' &&
        verifyReturn.panNumber == 'PAN is Not Valid'
      ) {
        this.validPan = true;
        this.validPhone = true;
      } else if (verifyReturn.phoneNumber == 'Phone Number is Not Valid') {
        this.validPan = false;
        alert('Phone Number is Not Valid');
      } else if (verifyReturn.panNumber == 'PAN is Not Valid') {
        this.validPhone = false;
        alert('PAN is Not Valid');
      } else if (verifyReturn.panNumber != this.verify.panNumber) {
        this.validPhone = false;
        this.validPan = true;
        this.exist1 = true;
      } else if (verifyReturn.phoneNumber != this.verify.phoneNumber) {
        this.validPhone = true;
        this.validPan = false;
        this.exist2 = true;
      } else {
        this.validPan = false;
        this.validPhone = false;
        this.green1 = true;
        this.green2 = true;
      }

      if (this.validPan == false && this.validPhone == false) {
        this.OTPdisplay = true;
      }
    });
    
  }

  onClick() {
    this.validPhone = this.phone != '' ? false : true;
    this.validPan = this.pan != '' ? false : true;

    if (this.phone.match('00000')) {
      this.validPhone = true;
    }
    this.exist1 = false;
    this.exist2 = false;

    if (this.disabled == false) {
      // console.log("IN REGI")
      this.registerNow();
    }
  }

  onSubmit() {
    this.validOtp = this.otp != '' ? false : true;
    this.disabled = this.check == 'checked' ? false : true;
    if (this.otp == '1234' && this.disabled == false) {
      this.validOtp = false;
      if (this.status == 208) {
        this.service.status = 208;
        console.log(this.verify);
        let resp = this.service.doRegistration(this.verify);
        resp.subscribe((data) => {
          let jsonObj = JSON.parse(data.body);
        });

        this.router.navigate(['/home']);
      } else {
        // console.log("IN submit 2")

        this.router.navigate(['/home/step1']);
      }
    } else if (this.disabled == true) {
      this.disabled = true;
    } else {
      this.validOtp = true;
    }
  }

  onCheck() {
    this.disabled = false;
    this.check = 'checked';
  }
}

// console.log('id ' + this.businessInfo.id);

//         let resp1 = this.service.updateRegister(this.businessInfo);
//         resp1.subscribe((data) => {
//           this.businessInfo = data.body;
//         });
