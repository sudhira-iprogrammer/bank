package com.example.demo.service;

import com.example.demo.model.BusinessInformation;
import com.example.demo.repository.BusinessInformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by sudhir on 12/12/22.
 */
@Service
public class BusinessInformationService {

    @Autowired
    private BusinessInformationRepository repository;

    public BusinessInformation getBusinessInformation(String id) {
        return repository.findAll().stream().filter(info -> id.equals(info.getId())).findFirst().orElse(null);
    }

    public List<BusinessInformation> getBusinessInformationList() {
        return repository.findAll();
    }

}
