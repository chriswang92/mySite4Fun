package code4fun.chriswang.springreactblog.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {
    @GetMapping("/123/hello")
    public String hello() {
        return "Hello, the time now is: " + new Date() + "\n";
    }
}
