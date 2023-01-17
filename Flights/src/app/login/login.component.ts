import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import {EMAIL_PATTERN} from "../constants"
import { User } from '../interfaces/user-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
  loginForm!: FormGroup;
  user?:User;

 
  constructor(private formBuilder: FormBuilder,
              private loginService:LoginService){

    }

  
  ngOnInit():void{
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });

  }

  onSubmit() {
    this.user = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.loginService.registerUser(this.user).subscribe(x=>
      x)
  }
 
}
