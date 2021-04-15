import { Injectable } from '@angular/core';

/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {

  items = [
    {
      name: "Milk",
      quantity: 2 
    },
    {
      name: "Bread",
      quantity: 2
    },
    {
      name: "Eggs",
      quantity: 1
    },
  ];

  constructor() {
    console.log('Hello GroceriesServiceProvider Provider');
  }


  getItems() {
    return this.items;

  }

  removeItem(index){
    this.items.splice(index, 1)

  }

  addItem(item){
    this.items.push(item);
  }


  editItem(item,index){
    this.items[index]=item;

  }

}
