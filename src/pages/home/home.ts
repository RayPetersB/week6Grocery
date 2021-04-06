import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { removeArrayItem } from 'ionic-angular/umd/util/util';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List"

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

  constructor(public navCtrl: NavController, public toastController: ToastController) {

  }
    removeItem(item) {
      console.log("Removing Item - ", item);
      const toast = this.toastController.create({
        message: 'Removing Item - .' + item.name + "...",
        duration: 3000
      });
      toast.present();
   }

}
