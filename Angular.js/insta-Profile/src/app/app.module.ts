import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { InstapostComponent } from './instapost/instapost.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    InstapostComponent,
    ProfileComponent,
    NavbarComponent,
    ProfileDetailsComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InlineSVGModule,
    AngularSvgIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
