import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  {path: '' , component: HomeComponent , pathMatch:'full'},
  {path: 'products',component : ShopComponent},
  {path: 'products/:id' ,component : ProductDetailComponent},
  {path: 'cart' , component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
