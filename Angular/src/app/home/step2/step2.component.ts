import { Component } from '@angular/core';
import { BankInfoService } from 'src/app/app-service/bank-info.service';
import { BusinessEntityAddressDetails } from 'src/app/Model/businessEntityAddressDetails';
import { BusinessEntityDetails } from 'src/app/Model/businessEntityDetails';
import { BusinessInformation } from 'src/app/Model/businessInformation';
import { Registration } from 'src/app/Model/Registration';
import { verifyUser } from 'src/app/verify.model';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component {
  // businessInfo:BusinessInformation=new BusinessInformation('','','','','','','','','','','','','','','','','')

  registration:Registration=new Registration('', '', '', '');

  businessEntityDetails:BusinessEntityDetails=new BusinessEntityDetails('','','','','','','','')
  businessEntityAddressDetails:BusinessEntityAddressDetails=new BusinessEntityAddressDetails('','','','','','','','')

  constructor(private service:BankInfoService){
   this.registration=service.registration
   this.businessEntityDetails=service.businessEntityDetails
   this.businessEntityAddressDetails=service.businessEntityAddressDetails

   console.log("n= "+this.businessEntityDetails.nameOfBusiness)
  //  this.businessEntityDetails=service.verify.businessEntityDetails;
    // this.businessInfo= service.businessInfo
    // this.businessInfo.id=service.verify.id
    // console.log(this.businessInfo.id)
  }
  
}
