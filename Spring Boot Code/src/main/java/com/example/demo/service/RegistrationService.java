package com.example.demo.service;

import com.example.demo.model.Registration;
import com.example.demo.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by sudhir on 9/12/22.
 */
@Service
public class RegistrationService {

    @Autowired
    public RegistrationRepository repository;

    public Registration getId(String id){
        return repository.findAll().stream().filter(rId->rId.getId().equals(id)).findFirst().orElse(null);
    }

    public Registration getPhone(String phoneNumber) {
        return repository.findAll().stream().filter(Number -> Number.getPhoneNumber().equals(phoneNumber)).findFirst().orElse(null);
    }

    public Registration getPan(String panNumber) {
        return repository.findAll().stream().filter(Number -> Number.getPanNumber().equals(panNumber)).findFirst().orElse(null);
    }

    public List<Registration> getRegistrationList() {
        return repository.findAll();
    }
}
