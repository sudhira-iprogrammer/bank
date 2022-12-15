package com.example.demo.controller;

import com.example.demo.advice.ApiRequestException;
import com.example.demo.advice.ApplicationExceptionHandler;
import com.example.demo.model.BusinessEntityAddressDetails;
import com.example.demo.model.BusinessEntityDetails;
import com.example.demo.model.BusinessInformation;
import com.example.demo.model.Registration;
import com.example.demo.repository.BusinessInformationRepository;
import com.example.demo.repository.RegistrationRepository;
import com.example.demo.service.BusinessInformationService;
import com.example.demo.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.List;

/**
 * Created by sudhir on 9/12/22.
 */
@CrossOrigin(origins = "*")
@RestController
public class RegistrationController {

    @Autowired
    private RegistrationService service;

    @Autowired
    private RegistrationRepository repository;

    @Autowired
    private ApplicationExceptionHandler exceptionHandler;

    @Autowired
    private BusinessInformationRepository repository1;

    public String RegisterId="";

    @PostMapping("/register")
    public ResponseEntity<Registration> register(@Valid @RequestBody() Registration registration) {

        List<Registration> registrationList = service.getRegistrationList();
        Registration registration1 = service.getPhone(registration.getPhoneNumber());


        if (registration1 != null) {
//            throw new ApiRequestException("phone existed");
//            registration1.setPhoneNumber("phone existed");
            RegisterId=registration1.getId();
            return new ResponseEntity<>(registration1, HttpStatus.ALREADY_REPORTED);
        }

        registration1 = service.getPan(registration.getPanNumber());

        if (registration1 != null) {
            RegisterId=registration1.getId();
            return new ResponseEntity<>(registration1, HttpStatus.ALREADY_REPORTED);
//            return new ResponseEntity("pan existed", HttpStatus.OK);
        }

        int count = registrationList.size() + 1;

        String num = "";

        if (count > 9 && count < 100)
            num = "0" + Integer.toString(count);
        else if (count > 99)
            num = Integer.toString(count);
        else
            num = "00" + Integer.toString(count);

        String date = LocalDate.now().toString();

        String dateParts[] = date.split("-");
        String day = dateParts[2];
        String month = dateParts[1];
        String year = dateParts[0];

        String idName = day + month + year;
        idName += num;

//        System.out.println(idName);
        RegisterId=idName;
        registration.setId(idName);
        BusinessEntityDetails businessEntityDetails=new BusinessEntityDetails();
        registration.setBusinessEntityDetails(businessEntityDetails);
        BusinessEntityAddressDetails businessEntityAddressDetails=new BusinessEntityAddressDetails();
        registration.setBusinessEntityAddressDetails(businessEntityAddressDetails);
        repository.save(registration);

        System.out.println(registration.getId());

        Registration returnRegist = service.getPhone(registration.getPhoneNumber());

        BusinessInformation businessInformation = new BusinessInformation();
        businessInformation.setId(idName);
        repository1.save(businessInformation);

        return new ResponseEntity<>(returnRegist, HttpStatus.CREATED);
    }

    @PostMapping("/updateregister")
    public ResponseEntity<Registration> updateRegister(@RequestBody() Registration registration) {
        RegisterId=registration.getId();
        repository.save(registration);
        Registration registration1 = service.getPhone(registration.getPhoneNumber());
//        System.out.println(RegisterId);
        return new ResponseEntity<>(registration1, HttpStatus.OK);
    }

    @GetMapping("/getBusinessEntityDetails")
    public ResponseEntity<BusinessEntityDetails> getBusinessEntityDetails(){
        Registration registration=service.getId(RegisterId);

        BusinessEntityDetails businessEntityDetails=registration.getBusinessEntityDetails();
        return new ResponseEntity<>(businessEntityDetails,HttpStatus.OK);
    }

    @GetMapping("/getBusinessEntityAddressdetails")
    public ResponseEntity<BusinessEntityAddressDetails> getBusinessEntityAddressdetails(){
        Registration registration=service.getId(RegisterId);
        BusinessEntityAddressDetails businessEntityDetails=registration.getBusinessEntityAddressDetails();
        return new ResponseEntity<>(businessEntityDetails,HttpStatus.OK);
    }

    @PostMapping("/saveBusinessEntityDetails")
    public ResponseEntity<BusinessEntityDetails> saveBusinessEntityDetails(@RequestBody BusinessEntityDetails businessEntityDetails){
//        System.out.println(businessEntityDetails.getNameOfBusiness());
        Registration registration=service.getId(RegisterId);

        registration.setBusinessEntityDetails(businessEntityDetails);

        repository.save(registration);

        registration = service.getId(RegisterId);

        BusinessEntityDetails businessEntityDetails1=registration.getBusinessEntityDetails();

        return new ResponseEntity<>(businessEntityDetails1,HttpStatus.CREATED);
    }

    @PostMapping("/saveBusinessAddressDetails")
    public ResponseEntity<BusinessEntityAddressDetails> saveBusinessAddressDetails(@RequestBody BusinessEntityAddressDetails businessEntityAddressDetails){
        Registration registration=service.getId(RegisterId);

        registration.setBusinessEntityAddressDetails(businessEntityAddressDetails);

        repository.save(registration);

        registration=service.getId(RegisterId);

        BusinessEntityAddressDetails businessEntityAddressDetails1=registration.getBusinessEntityAddressDetails();

        return new ResponseEntity<>(businessEntityAddressDetails1,HttpStatus.CREATED);
    }
}
