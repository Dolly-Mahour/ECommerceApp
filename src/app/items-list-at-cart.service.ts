import { Injectable } from '@angular/core';
import { ItemsList } from './ItemsClass';

@Injectable({
  providedIn: 'root'
})
export class ItemsListAtCartService {

  constructor() { }
  ItemsList:ItemsList[]=[];
}
