package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by sudhir on 14/12/22.
 */
@Document
public class BusinessEntityDetails {

    private String nameOfBusiness;
    private String dateOfIncorporation;
    private String typeOfActivity;
    private String businessCategory;
    private String businessDescription;
    private String businessVintage;
    private String udhyamRegistrationNo;
    private String pslClassification;

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
}
