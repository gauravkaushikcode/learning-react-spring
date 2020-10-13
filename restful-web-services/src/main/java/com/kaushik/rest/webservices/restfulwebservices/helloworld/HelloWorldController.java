package com.kaushik.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {
    // use get, uri - /hello-world
    // method to return hello
    @GetMapping(path = "/hello-world")
    public String helloworld() {
        return "hello world";
    }

    // hello-world-bean
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloworldBean() {
        return new HelloWorldBean("hello world bean");
    }

    // hello-world-bean with path variable
    @GetMapping(path = "/hello-world-bean/path/{name}")
    public HelloWorldBean helloworldPathVariable(@PathVariable String name) {
        // throw new RuntimeException(" went wrong");
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }
}