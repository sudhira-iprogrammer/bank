package com.example.demo.advice;

/**
 * Created by sudhir on 9/12/22.
 */
public class ApiRequestException extends RuntimeException {

    public ApiRequestException(String message) {
        super(message);
    }

//    public ApiRequestException(String message,Throwable cause){
//        super(message,cause);
//    }
}
