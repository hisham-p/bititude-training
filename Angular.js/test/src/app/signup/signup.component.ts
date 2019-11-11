import { UsernameValidators } from './username.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  // Synchronus validation

  // form = new FormGroup({
  //   username: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //     UsernameValidators.cannotContainSpace
  //   ]),
  //   password: new FormControl('', Validators.required)
  // });


  //  Ayschronus validation

  form = new FormGroup({
    username: new FormControl('',
    [Validators.required,
    Validators.minLength(3)],
     UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }
}
