package com.example.demo.repository;

import com.example.demo.model.BusinessInformation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by sudhir on 12/12/22.
 */

@Repository
public interface BusinessInformationRepository extends MongoRepository<BusinessInformation,String> {

    public List<BusinessInformation> findAll();
}
