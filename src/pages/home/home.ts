import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { removeArrayItem } from 'ionic-angular/umd/util/util';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List"



  constructor( public navCtrl: NavController, public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesServiceProvider, public inputDialogService: InputDialogServiceProvider) {

  }

  loadItems() {
    return this.dataService.getItems();

  }

  removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = this.toastController.create({
      message: 'Removing Item - .' + index + "...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index)



  }



  editItem(item, index) {
    console.log("Editing Item - ", item, index);
    const toast = this.toastController.create({
      message: 'Editing Item - .' + index + "...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);


  }
  addItem() {
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  }




}


