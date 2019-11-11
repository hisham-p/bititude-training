import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  contactMethods = [
    {id: 1 , name : 'Email'},
    {id: 2 , name : 'Phone'}
  ];
  log(x) { }
  submit(form) { console.log(form.value); }
}
