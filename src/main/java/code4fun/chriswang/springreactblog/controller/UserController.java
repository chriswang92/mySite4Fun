package code4fun.chriswang.springreactblog.controller;

import code4fun.chriswang.springreactblog.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("123/")
public class UserController {
    @RequestMapping(value = "user", method = RequestMethod.POST)
    public String addUser(@RequestBody User user) {
        return "The user added is: "+user+"\n username = " + user.getUsername() + "\n password = " + user.getPassword();
    }
}
