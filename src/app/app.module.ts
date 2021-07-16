import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenProductsComponent } from './men-products/men-products.component';
import { LoginComponent } from './login/login.component';
import { MenproductlistComponent } from './menproductlist/menproductlist.component';
import { MendetailsComponent } from './mendetails/mendetails.component';
import { WomenProductsComponent } from './women-products/women-products.component';
import { WomendetailsComponent } from './womendetails/womendetails.component';
import { WomenproductlistComponent } from './womenproductlist/womenproductlist.component';
import { KidsproductsComponent } from './kidsproducts/kidsproducts.component';
import { KidsdetailsComponent } from './kidsdetails/kidsdetails.component';
import { KidsproductlistComponent } from './kidsproductlist/kidsproductlist.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchpipePipe } from './searchpipe.pipe';
import { AccessoriesproductsComponent } from './accessoriesproducts/accessoriesproducts.component';
import { AccessoriesproductlistComponent } from './accessoriesproductlist/accessoriesproductlist.component';
import { AccessoriesdetailsComponent } from './accessoriesdetails/accessoriesdetails.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenProductsComponent,
    LoginComponent,
    MenproductlistComponent,
    MendetailsComponent,
    WomenProductsComponent,
    WomendetailsComponent,
    WomenproductlistComponent,
    KidsproductsComponent,
    KidsdetailsComponent,
    KidsproductlistComponent,
    WishlistComponent,
    SearchpipePipe,
    AccessoriesproductsComponent,
    AccessoriesproductlistComponent,
    AccessoriesdetailsComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
