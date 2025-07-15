import { Component, Input, NgModule, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, } from '@angular/router';
import { ItemsListService } from '../items-list.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',

})
export class NavbarComponent implements OnInit {
  constructor(private _S_ItemList: ItemsListService) {

  }
  @Input() Count!: number;
  TotalCount: number = this.Count
  TotalNumberOfItemsAddedInCart: number = 0
  ngOnInit(): void {
    // if (this._S_ItemList.currentData$) {}
    this._S_ItemList.currentData$.subscribe(data => {
      this.TotalNumberOfItemsAddedInCart = data;
      if (data) {
        console.log('Received live data:', data);
      }
    });
  }
}
