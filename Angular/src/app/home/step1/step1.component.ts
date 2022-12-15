import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BankInfoService } from 'src/app/app-service/bank-info.service';
import { authInterface } from 'src/app/auth.guard';
import { BusinessEntityAddressDetails } from 'src/app/Model/businessEntityAddressDetails';
import { BusinessEntityDetails } from 'src/app/Model/businessEntityDetails';
import { Registration } from 'src/app/Model/Registration';
import { verifyUser } from 'src/app/verify.model';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component implements OnInit, authInterface {
  // verify: verifyUser = new verifyUser('', '', '', '');
  registration:Registration=new Registration('', '', '', '');
  businessEntityDetails:BusinessEntityDetails=new BusinessEntityDetails('','','','','','','','',)
  businessEntityAddressDetails:BusinessEntityAddressDetails=new BusinessEntityAddressDetails('','','','','','','','',)
  

  ngOnInit() {}

  constructor(private service: BankInfoService) {
    this.registration = service.registration;
    this.businessEntityDetails=service.businessEntityDetails
    this.businessEntityAddressDetails=service.businessEntityAddressDetails

    console.log("n= "+this.businessEntityDetails.nameOfBusiness)
  }
  canActivateRoute(): boolean {
    return false;
  }
}
