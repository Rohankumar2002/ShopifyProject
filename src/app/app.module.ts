import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenProductsComponent } from './men-products/men-products.component';
import { LoginComponent } from './login/login.component';
import { MenproductlistComponent } from './menproductlist/menproductlist.component';
import { MendetailsComponent } from './mendetails/mendetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenProductsComponent,
    LoginComponent,
    MenproductlistComponent,
    MendetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
