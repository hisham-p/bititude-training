import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { CompletedComponent } from './completed/completed.component';
// import { CompletedComponent } from './completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CompletedComponent,
    // CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
