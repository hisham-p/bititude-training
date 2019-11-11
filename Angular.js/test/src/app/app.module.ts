import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ValidLoginComponent } from './valid-login/valid-login.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { HttpPostComponent } from './http-post/http-post.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductDetailsComponent,
    LoginComponent,
    SignupComponent,
    ValidLoginComponent,
    FormArrayComponent,
    HttpPostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
