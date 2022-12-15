import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { BankInfoService } from '../app-service/bank-info.service';
import { BusinessEntityAddressDetails } from '../Model/businessEntityAddressDetails';
import { BusinessEntityDetails } from '../Model/businessEntityDetails';
import { BusinessInformation } from '../Model/businessInformation';
import { Registration } from '../Model/Registration';
import { verifyUser } from '../verify.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  backBtn = false;
  step1 = false;
  step2 = false;
  step3 = false;
  step4 = false;
  step5 = false;
  bussinessInfoField = false;
  myStyle = '0px';
  myStyle1 = 'rgb(19, 60, 100)';
  myStyle2 = '';
  myStyle3 = '';
  myStyle4 = '';
  myStyle5 = '';
  progress = document.getElementById('progress');
  status = false;
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

  constructor(private router: Router, private service: BankInfoService) {
    this.verify = service.registration;
    this.businessEntityDetails = service.businessEntityDetails;
    this.businessEntityAddressDetails = service.businessEntityAddressDetails;

    if (service.status == 208) {
      this.status = true;
    }
    console.log(this.verify);
    console.log(
      'BU ' +
        this.businessEntityDetails.nameOfBusiness +
        ' ' +
        service.businessEntityDetails.nameOfBusiness
    );
  }

  onClick() {
    // if (this.service.step1Info == true) {
    //   console.log('yes');
    // } else {
    //   console.log('no');
    // }

    // this.businessInfo = this.service.businessInfo;
    console.log('M ' + this.verify.requestedAmount);
    console.log('b ' + this.service.businessEntityDetails.nameOfBusiness);
    console.log('b ' + this.businessEntityDetails.nameOfBusiness);
    console.log('b ' + this.businessEntityDetails.businessCategory);
    console.log('b ' + this.businessEntityDetails.typeOfActivity);
    console.log('b ' + this.businessEntityDetails.businessDescription);
    console.log('b ' + this.businessEntityDetails.dateOfIncorporation);
    // console.log("rb "+this.verify.businessEntityDetails.nameOfBusiness)
    console.log('rba ' + this.businessEntityAddressDetails.addrressLine1);
    console.log('rba ' + this.businessEntityAddressDetails.shopNo);
    console.log('rba ' + this.businessEntityAddressDetails.pincode);
    console.log('rba ' + this.businessEntityAddressDetails.noOfYearsAtAddress);
    console.log('rba ' + this.businessEntityAddressDetails.occupationOfPremise);
    // console.log(this.businessInfo.nameOfBusiness);
    // console.log(this.businessInfo.id);

    if (this.verify.requestedAmount == '') {
      alert('please fill Up Required field (*)');
    }

    if (
      this.step1 == false &&
      this.verify.requestedAmount != '' &&
      this.verify.requestedAmount != null
    ) {
      let resp = this.service.updateRegister(this.verify);
      resp.subscribe((data) => {
        let jsonObj = JSON.parse(data.body);
      });

      this.router.navigate(['home/step2']);
      this.myStyle = '178px';
      this.myStyle1 = '';
      this.myStyle2 = 'rgb(19, 60, 100)';
      this.step1 = true;
      this.step2 = true;
    } else if (this.step2 == true) {
      // if(this.verify.businessEntityDetails.nameOfBusiness!=''){

      // }

      if (
        this.businessEntityDetails.nameOfBusiness != '' &&
        this.businessEntityDetails.typeOfActivity != '' &&
        this.businessEntityDetails.businessDescription != '' &&
        this.businessEntityDetails.businessCategory != '' &&
        this.businessEntityDetails.dateOfIncorporation != '' &&
        this.businessEntityAddressDetails.shopNo != '' &&
        this.businessEntityAddressDetails.addrressLine1 != '' &&
        this.businessEntityAddressDetails.pincode != '' &&
        this.businessEntityAddressDetails.noOfYearsAtAddress != '' &&
        this.businessEntityAddressDetails.occupationOfPremise != ''
      ) {
        // this.businessInfo.id = this.service.verify.id;
        console.log('id ' + this.verify);
        this.bussinessInfoField = false;

        forkJoin(
          this.service.saveBusinessEntityDetails(this.businessEntityDetails),
          this.service.saveBusinessAddressDetails(this.businessEntityAddressDetails)
        ).subscribe(([resp,resp1])=>{
            console.log(resp.body);
            console.log(resp1.body)
        });

        this.backBtn = true;
        this.router.navigate(['home/step3']);
        this.myStyle = '355px';
        this.myStyle2 = '';
        this.myStyle3 = 'rgb(19, 60, 100)';
        this.step2 = false;
        this.step3 = true;
      } else {
        this.bussinessInfoField = true;
        alert('please fill Up Required field (*)');
      }
    } else if (this.step3 == true && this.bussinessInfoField == false) {
      this.router.navigate(['home/step4']);
      this.myStyle = '530px';
      this.myStyle3 = '';
      this.myStyle4 = 'rgb(19, 60, 100)';
      this.step3 = false;
      this.step4 = true;
    } else if (this.step4 == true) {
      this.router.navigate(['home/step5']);
      this.myStyle = '735px';
      this.myStyle4 = '';
      this.myStyle5 = 'rgb(19, 60, 100)';
      this.step4 = false;
      this.step5 = true;
    }
  }

  onBack() {
    if (this.step5 == true) {
      this.router.navigate(['home/step4']);
      this.myStyle = '530px';
      this.myStyle5 = '';
      this.myStyle4 = 'rgb(19, 60, 100)';
      this.step5 = false;
      this.step4 = true;
    } else if (this.step4 == true) {
      this.router.navigate(['home/step3']);
      this.myStyle = '355px';
      this.myStyle3 = 'rgb(19, 60, 100)';
      this.myStyle4 = '';
      this.step4 = false;
      this.step3 = true;
    } else if (this.step3 == true) {
      this.backBtn = false;
      this.router.navigate(['home/step2']);
      this.myStyle = '178px';
      this.myStyle2 = 'rgb(19, 60, 100)';
      this.myStyle3 = '';
      this.step3 = false;
      this.step2 = true;
    } else if (this.step2 == true) {
      this.router.navigate(['home/step1']);
      this.myStyle = '0px';
      this.myStyle1 = 'rgb(19, 60, 100)';
      this.myStyle2 = '';
      this.step2 = false;
      this.step1 = false;
    }
  }

  onView() {
    this.router.navigate(['/home/step1']);
    this.status = false;
  }
  onLogged() {
    window.location.assign('/');
  }
}
