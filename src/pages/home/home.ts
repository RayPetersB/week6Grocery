import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { removeArrayItem } from 'ionic-angular/umd/util/util';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List"

 

  constructor(public navCtrl: NavController, public toastController: ToastController,public alertController: AlertController,public dataService: GroceriesServiceProvider) {

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
    this.showEditItemPrompt(item, index);


  }
  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

  showAddItemPrompt() {
    let alert = this.alertController.create({
      title: 'Add Item',
      message: "Enter an Item",
      inputs: [
        {
          name: 'name',
          placeholder: 'Grocery Item Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',

        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log("Saved CLick", item);
            this.dataService.addItem(item);



            // if (item.isValid(item.name, item.quantity)) {
            //   // logged in!
            // } else {
            //   // invalid login
            //   return false;

          }
        }
      ]
    });
    alert.present();
  }


  showEditItemPrompt(item, index) {
    let alert = this.alertController.create({
      title: 'Edit Item',
      message: "Please Item",
      inputs: [
        {
          name: 'name',
          placeholder: 'Grocery Item Name',
          value: item.name
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item.quantity

        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log("Saved CLick", item);
            this.dataService.editItem(item,index);


          }
        }
      ]
    });
    alert.present();
  }




}


