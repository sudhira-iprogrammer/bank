package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by sudhir on 14/12/22.
 */
@Document
public class BusinessEntityAddressDetails {

    private String shopNo;
    private String addrressLine1;
    private String addrressLine2;
    private String pincode;
    private String city;
    private String state;
    private String noOfYearsAtAddress;
    private String occupationOfPremise;

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
