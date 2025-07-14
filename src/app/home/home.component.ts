import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ItemsListComponent } from '../items-list/items-list.component';
import { ItemsListService } from '../items-list.service';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,ItemsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:true
})
export class HomeComponent implements OnInit {
  // @Input() Count :number;
  
    constructor(private _S_ItemList: ItemsListService) {
  
    }
    TotalNumberOfItemsAddedInCart: number = 0
    ngOnInit(): void {
      // this.TotalNumberOfItemsAddedInCart = this._S_ItemList.getNumberOfItems()
    }
}
