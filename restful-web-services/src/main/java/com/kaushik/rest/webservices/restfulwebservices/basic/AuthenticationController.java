package com.kaushik.rest.webservices.restfulwebservices.basic;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AuthenticationController {
    // hello-world-bean
    @GetMapping(path = "/basicauth")
    public AuthenticationBean authenticationBean() {
        return new AuthenticationBean("You are authenticated");
    }
}