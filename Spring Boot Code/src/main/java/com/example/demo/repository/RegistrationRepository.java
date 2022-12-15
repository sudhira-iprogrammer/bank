package com.example.demo.repository;

import com.example.demo.model.Registration;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by sudhir on 9/12/22.
 */
@Repository
public interface RegistrationRepository extends MongoRepository<Registration,String> {

    public List<Registration> findAll();
}
