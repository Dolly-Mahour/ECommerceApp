import { Component, OnInit } from '@angular/core';
import { ItemsList } from '../ItemsClass';
import { ItemsListService } from '../items-list.service';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-items-list',
  imports: [CommonModule, NgFor],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})





export class ItemsListComponent implements OnInit {




  constructor(private _S_itemslist: ItemsListService) {

  }


  TotalItemsInTheCart: number = 0
  // ListOfProductImages: string[] = ['images/airdops.jpeg', 'images/schoolbag.jpeg', 'images/socks.jpeg', '/images/dress.jpeg', '/images/headphones.jpeg', '/images/saree.jpeg']
  ListOfProductImages: string[] = [
    'assets/images/airdops.jpeg',
    'assets/images/schoolbag.jpeg',
    'assets/images/socks.jpeg',
    'assets/images/dress.jpeg',
    'assets/images/headphones.jpeg',
    'assets/images/saree.jpeg'
  ];
  _S_TotalListOfItems: ItemsList[] = [];
  ItemsInCart_MainCart!: ItemsList[];
  TotalNumberOfItemsInCart_MainCart: number = 0;
  index!: number;



  ngOnInit(): void {
    this._S_TotalListOfItems = this._S_itemslist.List

    console.log("LOCAL STORAGE ITEMS IN THE ITEMLIST-COMPONENT-->", JSON.parse(String(localStorage.getItem('ItemsAddedAtCart'))));

    // if local storage is null--------------------------------------------------------------------------------------
    if (localStorage.getItem('ItemsAddedAtCart') == '') {
      localStorage.setItem('ItemsAddedAtCart', '')
    }
    // if local storage have something in the cart ------------------------------------------------------------------
    else {
      let str = String(localStorage.getItem('ItemsAddedAtCart'))
      this.ItemsInCart_MainCart = JSON.parse(str)

      this._S_itemslist.ItemListAtCartInService = this.ItemsInCart_MainCart
    }

    for (let i = 0; i < this._S_TotalListOfItems.length; i++) {
      if (this.ItemsInCart_MainCart.length > 0) {
        for (let j = 0; j < this.ItemsInCart_MainCart.length; j++) {
          if (this._S_TotalListOfItems[i].ItemName == this.ItemsInCart_MainCart[j].ItemName) {
            console.log("YESS-->ITEM EXIST IN THE CART", i, this._S_TotalListOfItems[i].ItemName, this.ItemsInCart_MainCart[j]);
            this._S_TotalListOfItems[i].NumberOFItemsAddedInCart = this.ItemsInCart_MainCart[j].NumberOFItemsAddedInCart
            break
          }
        }
      }
      else {
        console.log("CART IS EMPTY-->");

      }
    }
    this._S_itemslist.ItemListAtCartInService = this.ItemsInCart_MainCart
    localStorage.setItem('ItemsAddedAtCart', JSON.stringify(this.ItemsInCart_MainCart))

    this._S_itemslist.sendData(this.ItemsInCart_MainCart.length)
    this.TotalItemsInTheCart = this._S_itemslist.TotalNumberOfItemsInCart
  }


  IncreaseProductQuantity(itemToAdd: ItemsList, Img: string) {
    console.log("CALLING THE ADD TO CART METHOD --> adding to product", itemToAdd.ItemName);

    //index of the item we are adding --------------------------------------------
    const index = this.ItemsInCart_MainCart.findIndex(i => i.ItemName === itemToAdd.ItemName);

    itemToAdd.ImageUrl = Img;
    itemToAdd.ItemAddedToCart = true;
    // does not exist----------------------------------------------------------------
    if (index === -1) {
      itemToAdd.NumberOFItemsAddedInCart = 1;
      this.ItemsInCart_MainCart.push(itemToAdd);
      this.TotalItemsInTheCart = this.ItemsInCart_MainCart.length
    }
    // exist--------------------------
    else {
      this.ItemsInCart_MainCart[index].NumberOFItemsAddedInCart = this.ItemsInCart_MainCart[index].NumberOFItemsAddedInCart + 1;
    }

    this.TotalNumberOfItemsInCart_MainCart = this.TotalNumberOfItemsInCart_MainCart + 1;

    this._S_itemslist.TotalNumberOfItemsInCart = this.TotalItemsInTheCart
    this._S_itemslist.ItemListAtCartInService = this.ItemsInCart_MainCart;
    localStorage.setItem('ItemsAddedAtCart', JSON.stringify(this.ItemsInCart_MainCart));

    this._S_itemslist.sendData(this.ItemsInCart_MainCart.length)
    this.TotalItemsInTheCart = this._S_itemslist.TotalNumberOfItemsInCart
  }



}
