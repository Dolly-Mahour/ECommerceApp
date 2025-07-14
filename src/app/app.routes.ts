import { Routes } from '@angular/router';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path :'cart', component : CartItemsComponent},
    {path :'', component : HomeComponent}
];
