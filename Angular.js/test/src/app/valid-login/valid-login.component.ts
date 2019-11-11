import { UsernameValidators } from './login.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-login',
  templateUrl: './valid-login.component.html',
  styleUrls: ['./valid-login.component.css']
})
export class ValidLoginComponent {

  form = new FormGroup({
    username: new FormControl('',
      [Validators.required,
      Validators.minLength(3)],
      UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });
  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }


  get username() {
    return this.form.get('username');
  }
}

