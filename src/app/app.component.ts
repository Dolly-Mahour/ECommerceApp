import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { ItemsListService } from './items-list.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ItemsListComponent, CartItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ECommerceApp';

  constructor(private _S_ItemList: ItemsListService) {

  }
  TotalNumberOfItemsAddedInCart: number = 0
  ngOnInit(): void {
    // this.TotalNumberOfItemsAddedInCart = this._S_ItemList.getNumberOfItems()
  }
}
