package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by sudhir on 12/12/22.
 */
@Document
public class BusinessInformation {

    @Id
    private String id;

    private String nameOfBusiness;
    private String dateOfIncorporation;
    private String typeOfActivity;
    private String businessCategory;
    private String businessDescription;
    private String businessVintage;
    private String udhyamRegistrationNo;
    private String pslClassification;
    private String shopNo;
    private String addrressLine1;
    private String addrressLine2;
    private String pincode;
    private String city;
    private String state;
    private String noOfYearsAtAddress;
    private String occupationOfPremise;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNameOfBusiness() {
        return nameOfBusiness;
    }

    public void setNameOfBusiness(String nameOfBusiness) {
        this.nameOfBusiness = nameOfBusiness;
    }

    public String getDateOfIncorporation() {
        return dateOfIncorporation;
    }

    public void setDateOfIncorporation(String dateOfIncorporation) {
        this.dateOfIncorporation = dateOfIncorporation;
    }

    public String getTypeOfActivity() {
        return typeOfActivity;
    }

    public void setTypeOfActivity(String typeOfActivity) {
        this.typeOfActivity = typeOfActivity;
    }

    public String getBusinessCategory() {
        return businessCategory;
    }

    public void setBusinessCategory(String businessCategory) {
        this.businessCategory = businessCategory;
    }

    public String getBusinessDescription() {
        return businessDescription;
    }

    public void setBusinessDescription(String businessDescription) {
        this.businessDescription = businessDescription;
    }

    public String getBusinessVintage() {
        return businessVintage;
    }

    public void setBusinessVintage(String businessVintage) {
        this.businessVintage = businessVintage;
    }

    public String getUdhyamRegistrationNo() {
        return udhyamRegistrationNo;
    }

    public void setUdhyamRegistrationNo(String udhyamRegistrationNo) {
        this.udhyamRegistrationNo = udhyamRegistrationNo;
    }

    public String getPslClassification() {
        return pslClassification;
    }

    public void setPslClassification(String pslClassification) {
        this.pslClassification = pslClassification;
    }

    public String getShopNo() {
        return shopNo;
    }

    public void setShopNo(String shopNo) {
        this.shopNo = shopNo;
    }

    public String getAddrressLine1() {
        return addrressLine1;
    }

    public void setAddrressLine1(String addrressLine1) {
        this.addrressLine1 = addrressLine1;
    }

    public String getAddrressLine2() {
        return addrressLine2;
    }

    public void setAddrressLine2(String addrressLine2) {
        this.addrressLine2 = addrressLine2;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getNoOfYearsAtAddress() {
        return noOfYearsAtAddress;
    }

    public void setNoOfYearsAtAddress(String noOfYearsAtAddress) {
        this.noOfYearsAtAddress = noOfYearsAtAddress;
    }

    public String getOccupationOfPremise() {
        return occupationOfPremise;
    }

    public void setOccupationOfPremise(String occupationOfPremise) {
        this.occupationOfPremise = occupationOfPremise;
    }
}
