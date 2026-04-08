import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Cart } from './pages/cart/cart';
import { Products } from './pages/products/products';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'products', component: Products },
  { path: 'cart', component: Cart }
];