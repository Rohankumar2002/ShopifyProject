import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesdetailsComponent } from './accessoriesdetails/accessoriesdetails.component';
import { AccessoriesproductsComponent } from './accessoriesproducts/accessoriesproducts.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { KidsdetailsComponent } from './kidsdetails/kidsdetails.component';
import { KidsproductsComponent } from './kidsproducts/kidsproducts.component';
import { LoginComponent } from './login/login.component';
import { MenProductsComponent } from './men-products/men-products.component';
import { MendetailsComponent } from './mendetails/mendetails.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WomenProductsComponent } from './women-products/women-products.component';
import { WomendetailsComponent } from './womendetails/womendetails.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'men',component:MenProductsComponent},
  {path:'login',component:LoginComponent},
  //{path:'cart/:firstname',component:WishlistComponent},
  {path:'men/:id',component:MendetailsComponent},
  {path:'women',component:WomenProductsComponent},
   {path:'women/:id',component:WomendetailsComponent},
   {path:'', redirectTo:'/login',pathMatch:'full'},
   {path:'kids',component:KidsproductsComponent},
   {path:'kids/:id',component:KidsdetailsComponent},
   {path:'cart',component:CartComponent},
   {path:'access',component:AccessoriesproductsComponent},
   {path:'access/:id',component:AccessoriesdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
