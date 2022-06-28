
package com.team2.backend.web.controller.user;


import com.team2.backend.service.user.AccountsService;
import com.team2.backend.web.dto.user.AccountsRequestDto;
import com.team2.backend.web.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestController
public class AccountsController {

    private final AccountsService accountsService;

    @PostMapping("/signup")
    public ResponseEntity<Message> signup(@RequestBody AccountsRequestDto req) {
        return accountsService.signup(req);
    }

    @PostMapping("/changePassword")
    public ResponseEntity<Message> changePassword(HttpServletRequest req, @RequestBody AccountsRequestDto accountsRequestDto){
        return accountsService.changePassword(accountsRequestDto);
    }

    // TEST
//    @PostMapping("/main")
//    public ResponseEntity<Message> main() {
//        return accountsService.main();
//    }

    @PostMapping("/admin")
    public ResponseEntity<Message> admin() {
        return accountsService.admin();
    }
}
