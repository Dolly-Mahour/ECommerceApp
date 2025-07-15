import { Component, Inject, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ItemsList } from '../ItemsClass';
import { ItemsListService } from '../items-list.service';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-cart-items',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css',
  standalone: true
})


export class CartItemsComponent implements OnInit {

  constructor(private _S_itemslist: ItemsListService, @Inject(APP_BASE_HREF) private baseHref: string) {
    this.ListOfProductImages = [
      `${this.baseHref}images/airdops.jpeg`,
      `${this.baseHref}images/schoolbag.jpeg`,
      `${this.baseHref}images/socks.jpeg`,
      `${this.baseHref}images/dress.jpeg`,
      `${this.baseHref}images/headphones.jpeg`,
      `${this.baseHref}images/saree.jpeg`,
    ];
  }

  ngOnInit(): void {
    this._S_TotalListOfItems = this._S_itemslist.List
    // If the local storage is null
    if (localStorage.getItem("ItemsAddedAtCart") == '') {
      localStorage.setItem('ItemsAddedAtCart', '')
    }
    // If the local storage have some items in the cart 
    else {
      let str = String(localStorage.getItem('ItemsAddedAtCart'))
      this.ItemsInCart_MainCart = JSON.parse(str)
      // console.log("ON THE CALL OF THE CART-COMPONENT WHAT WE HAVE IN LOCAL STORAGE-->", this.ItemsInCart_MainCart);
    }
    if (this._S_TotalListOfItems && this._S_TotalListOfItems.length > 0) {
      for (let i = 0; i < this._S_TotalListOfItems?.length; i++) {
        if (this.ItemsInCart_MainCart.length > 0) {
          for (let j = 0; j < this.ItemsInCart_MainCart.length; j++) {
            if (this._S_TotalListOfItems[i].ItemName == this.ItemsInCart_MainCart[j].ItemName) {
              // console.log("YESS-->ITEM EXIST IN THE CART", i, this._S_TotalListOfItems[i].ItemName, this.ItemsInCart_MainCart[j]);
              this._S_TotalListOfItems[i].NumberOFItemsAddedInCart = this.ItemsInCart_MainCart[j].NumberOFItemsAddedInCart
              break
            }
          }
        }
        else {
          // console.log("CART IS EMPTY-->");

        }
      }
    }

    localStorage.setItem('ItemsAddedAtCart', JSON.stringify(this.ItemsInCart_MainCart))
    this._S_itemslist.sendData(this.ItemsInCart_MainCart.length)
  }



  // ListOfProductImages: string[] = ['images/airdops.jpeg', 'images/schoolbag.jpeg', 'images/socks.jpeg', 'images/dress.jpeg', 'images/headphones.jpeg', 'images/saree.jpeg']
  ListOfProductImages: string[] = [
    'assets/images/airdops.jpeg',
    'assets/images/schoolbag.jpeg',
    'assets/images/socks.jpeg',
    'assets/images/dress.jpeg',
    'assets/images/headphones.jpeg',
    'assets/images/saree.jpeg'
  ];
   _S_TotalListOfItems: ItemsList[] = [];
  ItemsInCart_MainCart: ItemsList[] = [];
  TotalNumberOfItemsInCart_MainCart: number = 0;
  index: number = 0;




  IncreaseProductQuantity(itemToAdd: ItemsList) {
    // console.log("INCREASING THE QUANTITY-->", itemToAdd.NumberOFItemsAddedInCart);

    this.TotalNumberOfItemsInCart_MainCart = this.TotalNumberOfItemsInCart_MainCart + 1
    itemToAdd.NumberOFItemsAddedInCart = itemToAdd.NumberOFItemsAddedInCart + 1
    // itemToAdd.ImageUrl = Img
    itemToAdd.ItemAddedToCart = true
    // console.log(itemToAdd);
    let index: number;


    for (let i = 0; i < this._S_TotalListOfItems.length; i++) {
      if (itemToAdd.ItemName == this.ItemsInCart_MainCart[i].ItemName) {
        // console.log("YESS-->ITEM EXIST IN THE CART", i, itemToAdd.ItemName, this.ItemsInCart_MainCart[i],);
        index = Number(i);
        this.ItemsInCart_MainCart.splice(index, 1)
        this.ItemsInCart_MainCart.splice(index, 0, itemToAdd)
        break
      }
      else {
        // console.log("NO ITEM FOUND IN THE CART-->");

      }
    }
    this._S_itemslist.ItemListAtCartInService = this.ItemsInCart_MainCart
    localStorage.setItem('ItemsAddedAtCart', JSON.stringify(this.ItemsInCart_MainCart))
    this._S_itemslist.sendData(this.ItemsInCart_MainCart.length)
  }


  DecreaseProductQuantity(itemToAdd: ItemsList) {
    itemToAdd.ItemAddedToCart = true;

    const index = this.ItemsInCart_MainCart.findIndex(i => i.ItemName === itemToAdd.ItemName);

    if (index === -1) {
      return
    }
    itemToAdd.NumberOFItemsAddedInCart--;

    if (itemToAdd.NumberOFItemsAddedInCart === 0) {
      this.ItemsInCart_MainCart.splice(index, 1);
    }
    else {
      this.ItemsInCart_MainCart.splice(index, 1, itemToAdd);
    }

    localStorage.setItem('ItemsAddedAtCart', JSON.stringify(this.ItemsInCart_MainCart));
    this._S_itemslist.sendData(this.ItemsInCart_MainCart.length)
  }


  DeleteItemFromCart(itemToDelete: ItemsList) {
    // console.log("ITEM DELETING -->", itemToDelete);

    itemToDelete.NumberOFItemsAddedInCart = 0;
    itemToDelete.ItemAddedToCart = false;

    const index = this.ItemsInCart_MainCart.findIndex(i => i.ItemName === itemToDelete.ItemName);
    if (index === -1) {
      return
    }

    this.ItemsInCart_MainCart.splice(index, 1);
    localStorage.setItem('ItemsAddedAtCart', JSON.stringify(this.ItemsInCart_MainCart));
    this._S_itemslist.sendData(this.ItemsInCart_MainCart.length)
  }


}
