import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @ViewChild ('f2') signInForm : NgForm;
  defaultKnow = "online";

  user = {
    email : '',
    password : ''
  };
  signUp = false;
  signIn = false;
  pswd = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSignUp() {

  }

  onSignIn() {
    this.signIn = true;
    this.user.email = this.signInForm.value.signInData.email;
    this.user.password = this.signInForm.value.signInData.password
  }

  onSigningIn(pwd : HTMLInputElement) {
    this.pswd = pwd.value
    if((this.pswd).length<8) {
      return true
    }

    

  }

  onMouseLeave(event: Event) {
    let fieldInput = (<HTMLInputElement>event.target).value;

    if(fieldInput=='') {
      return false;
    }
    else {
      return true;
    }

    }
  }
 

  


