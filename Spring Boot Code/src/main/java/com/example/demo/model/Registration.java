package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import java.util.List;

/**
 * Created by sudhir on 9/12/22.
 */
@Document
public class Registration {

    @Id
    private String id;

    @Pattern(regexp = "[6-9]{1}[0-9]{9}", message = "Phone Number is Not Valid")
    private String phoneNumber;

    @Pattern(regexp = "[A-Z]{3}[A-C|F-H|L|J|P|T]{1}[A-Z]{1}[0-9]{4}[A-Z]", message = "PAN is Not Valid")
    private String panNumber;

    private String requestedAmount;

    private BusinessEntityDetails businessEntityDetails;

    private BusinessEntityAddressDetails businessEntityAddressDetails;

    public BusinessEntityAddressDetails getBusinessEntityAddressDetails() {
        return businessEntityAddressDetails;
    }

    public void setBusinessEntityAddressDetails(BusinessEntityAddressDetails businessEntityAddressDetails) {
        this.businessEntityAddressDetails = businessEntityAddressDetails;
    }

    public BusinessEntityDetails getBusinessEntityDetails() {
        return businessEntityDetails;
    }

    public void setBusinessEntityDetails(BusinessEntityDetails businessEntityDetails) {
        this.businessEntityDetails = businessEntityDetails;
    }

    public String getRequestedAmount() {
        return requestedAmount;
    }

    public void setRequestedAmount(String requestedAmount) {
        this.requestedAmount = requestedAmount;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPanNumber() {
        return panNumber;
    }

    public void setPanNumber(String panNumber) {
        this.panNumber = panNumber;
    }
}
