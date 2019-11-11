import { HttpPostComponent } from './http-post/http-post.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ValidLoginComponent } from './valid-login/valid-login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'products', component: ProductDetailsComponent },
  { path: 'validLogin', component: ValidLoginComponent },
  { path: 'array', component: FormArrayComponent },
  { path: 'http', component: HttpPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
