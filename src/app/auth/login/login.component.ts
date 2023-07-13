import { HttpErrorResponse } from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommunityServiceService } from '../../Services/community-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage: string = '';
  private returnUrl: string | undefined;
  showError!: boolean;

  constructor(private CommunitService: CommunityServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })

  }



  loginUser (){

    this.showError = false;

    const payload =

    {
      "mobile": this.loginForm.value.username,
      "password": this.loginForm.value.password
    }

    this.CommunitService.getloginUser(payload)
      .subscribe(item => {
        var Result = item.toString();

        if (Result !== "Invalid") {
          localStorage.setItem("token", item.toString());
          this.router.navigate([this.returnUrl]);
        }
        else
        {
          this.errorMessage = "Invalid Credentials";
          this.showError = true;
        }
      })
  }


}
