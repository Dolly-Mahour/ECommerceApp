import { Injectable, OnInit } from '@angular/core';
import { ItemsList } from './ItemsClass';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsListService implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  List: ItemsList[] = [
    {
      ItemName: 'Boats Airdops',
      ItemPrice: 999,
      ItemDescription: 'Wireless AirPods with clear sound, noise cancellation, touch controls, and long-lasting battery for convenience',
      ItemAddedToCart: false,
      NumberOFItemsAddedInCart: 0,
      ImageUrl: ''
    },
    {
      ItemName: 'Fast Track School Bag',
      ItemPrice: 549,
      ItemDescription: 'Durable, lightweight schoolbag with compartments and padded straps for comfort, style, and daily use.',
      ItemAddedToCart: false,
      NumberOFItemsAddedInCart: 0,
      ImageUrl: ''
    },
    {
      ItemName: 'Socks',
      ItemPrice: 179,
      ItemDescription: 'Soft, breathable socks with cushioned soles for everyday comfort, dryness, and all-day support.',
      ItemAddedToCart: false,
      NumberOFItemsAddedInCart: 0,
      ImageUrl: ''
    },
    {
      ItemName: 'Kotty Dress',
      ItemPrice: 1599,
      ItemDescription: 'Stylish one-piece dress offering comfort and elegance, ideal for casual outings, dates, or parties.',
      ItemAddedToCart: false,
      NumberOFItemsAddedInCart: 0,
      ImageUrl: ''
    },
    {
      ItemName: 'JLB Headphones',
      ItemPrice: 4899,
      ItemDescription: 'Comfort-fit headphones with immersive sound, noise isolation, and long battery—perfect for music, work, or gaming.',
      ItemAddedToCart: false,
      NumberOFItemsAddedInCart: 0,
      ImageUrl: ''
    },
    {
      ItemName: 'Khadi Saree',
      ItemPrice: 1899,
      ItemDescription: 'Elegant saree with rich fabric and intricate design, perfect for festivals, weddings, and special occasions.',
      ItemAddedToCart: false,
      NumberOFItemsAddedInCart: 0,
      ImageUrl: ''
    },
  ];

  ItemListAtCartInService: ItemsList[] = [];
  TotalNumberOfItemsInCart: number=0;
  updateCart(CartList: ItemsList[]) {
    this.ItemListAtCartInService = CartList;
    localStorage.setItem('ItemsAddedAtCart', JSON.stringify(CartList));
  }

  getNumberOfItems(count: number) {

    this.TotalNumberOfItemsInCart = count

  }



  // RXJS using the syncronus function from third party   ------------------
  private _currentData = new BehaviorSubject<any>(null);
  currentData$: Observable<any> = this._currentData.asObservable();

  sendData(data: any) {
    this._currentData.next(data);
  }
  // ----------------------------------------------------------------------

  
  getCartFromStorage(): ItemsList[] {
    const storedCart = localStorage.getItem('ItemsAddedAtCart');

    if (storedCart) {
      this.TotalNumberOfItemsInCart = JSON.parse(storedCart).length
      return JSON.parse(storedCart);
    }
    else {
      return [];
    }
  }
}
