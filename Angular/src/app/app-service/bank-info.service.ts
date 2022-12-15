import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BusinessEntityAddressDetails } from '../Model/businessEntityAddressDetails';
import { BusinessEntityDetails } from '../Model/businessEntityDetails';
import { BusinessInformation } from '../Model/businessInformation';
import { Registration } from '../Model/Registration';
import { verifyUser } from '../verify.model';

@Injectable({
  providedIn: 'root',
})
export class BankInfoService {
  // verify: verifyUser = new verifyUser('', '', '', '');
  registration: Registration = new Registration('', '', '', '');
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

  // businessInfo: BusinessInformation = new BusinessInformation(
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   ''
  // );
  phoneNo: String = '';
  status = 0;
  panNo: String = '';
  step1Info = false;
  step1 = false;
  step2 = false;
  step3 = false;
  step4 = false;
  step5 = false;
  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  public doRegistration(data: any): Observable<any> {
    return this.http
      .post(`${this.baseUrl}` + 'register', data, {
        responseType: 'text',
        observe: 'response',
      })
      .pipe(
        map((responseData) => {
          // console.log(
          //   'Here will be return response code Ex :200',
          //   responseData.status
          // );
          // console.log(JSON.stringify(responseData.body));
          return responseData;
        })
      );
  }

  // public saveBusinessInfo(data: any): Observable<any> {
  //   return this.http
  //     .post('http://localhost:8080/saveinfo', data, {
  //       responseType: 'text',
  //       observe: 'response',
  //     })
  //     .pipe(
  //       map((responseData) => {
  //         console.log(responseData.status);
  //         console.log(responseData.body);
  //         return responseData;
  //       })
  //     );
  // }

  public updateRegister(data: any): Observable<any> {
    return this.http
      .post('http://localhost:8080/updateregister', data, {
        responseType: 'text',
        observe: 'response',
      })
      .pipe(
        map((responseData) => {
          console.log(responseData.status);
          return responseData;
        })
      );
  }

  // public getBusinessInfo(data: any): Observable<any> {
  //   return this.http
  //     .post('http://localhost:8080/getbusinessinfo', data, {
  //       responseType: 'text',
  //       observe: 'response',
  //     })
  //     .pipe(
  //       map((responseData) => {
  //         return responseData;
  //       })
  //     );
  // }

  public getBusinessEntityDetails(): Observable<any> {
    return this.http
      .get('http://localhost:8080/getBusinessEntityDetails', {
        responseType: 'text',
        observe: 'response',
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  public getBusinessEntityAddressdetails(): Observable<any> {
    return this.http
      .get('http://localhost:8080/getBusinessEntityAddressdetails', {
        responseType: 'text',
        observe: 'response',
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  public saveBusinessEntityDetails(data: any): Observable<any> {
    return this.http
      .post('http://localhost:8080/saveBusinessEntityDetails', data, {
        responseType: 'text',
        observe: 'response',
      })
      .pipe(
        map((responseData) => {
          return responseData;
        })
      );
  }

  public saveBusinessAddressDetails(data: any): Observable<any> {
    return this.http
      .post('http://localhost:8080/saveBusinessAddressDetails', data, {
        responseType: 'text',
        observe: 'response',
      })
      .pipe(
        map((responseData) => {
          return responseData;
        })
      );
  }
}
