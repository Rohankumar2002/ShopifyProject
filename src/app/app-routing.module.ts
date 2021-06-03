import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenProductsComponent } from './men-products/men-products.component';
import { MendetailsComponent } from './mendetails/mendetails.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'men',component:MenProductsComponent},
  {path:'login',component:LoginComponent},
  {path:'men/:id',component:MendetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
