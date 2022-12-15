package com.example.demo.controller;

import com.example.demo.model.BusinessEntityDetails;
import com.example.demo.model.BusinessInformation;
import com.example.demo.model.Registration;
import com.example.demo.repository.BusinessInformationRepository;
import com.example.demo.service.BusinessInformationService;
import com.example.demo.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by sudhir on 12/12/22.
 */
@CrossOrigin(origins = "*")
@RestController
public class BusinessInformationController {

    @Autowired
    public RegistrationService service;

    @Autowired
    public RegistrationController controller;

//    @GetMapping("/getBusinessEntityDetails")
//    public ResponseEntity<BusinessEntityDetails> getBusinessEntityDetails(){
//        System.out.println("id "+controller.RegisterId);
//        Registration registration=service.getId(controller.RegisterId);
//
//        BusinessEntityDetails businessEntityDetails=registration.getBusinessEntityDetails();
//        return new ResponseEntity<>(businessEntityDetails,HttpStatus.OK);
//    }

//    @Autowired
//    private BusinessInformationRepository repository;
//
//    @Autowired
//    private BusinessInformationService service;
//
//    @Autowired
//    private RegistrationService service1;
//
//    @PostMapping("/saveinfo")
//    public ResponseEntity<BusinessInformation> saveInfo(@RequestBody BusinessInformation businessInformation) {
//        BusinessInformation businessInformation1 = service.getBusinessInformation(businessInformation.getId());
//        repository.save(businessInformation);
//
//        BusinessInformation information = service.getBusinessInformation(businessInformation.getId());
//        return new ResponseEntity<>(information, HttpStatus.OK);
//    }
//
//    @PostMapping("/getbusinessinfo")
//    public ResponseEntity<BusinessInformation> getbusinessinfo(@RequestBody() BusinessInformation businessInformation) {
//        BusinessInformation businessInformation1 = service.getBusinessInformation(businessInformation.getId());
//
//        return new ResponseEntity<>(businessInformation1, HttpStatus.ALREADY_REPORTED);
//    }
//
//    @PostMapping("/saveBusinessEntityDetails")
//    public ResponseEntity<Registration> saveBusinessEntityDetails(@RequestBody BusinessEntityDetails businessEntityDetails){
//        System.out.println(businessEntityDetails.getNameOfBusiness());
//        Registration registration=service1.getId("14122022001");
//
//        registration.setBusinessEntityDetails(businessEntityDetails);
//
//        return new ResponseEntity<>(registration,HttpStatus.CREATED);
//    }
}
