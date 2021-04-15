import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { removeArrayItem } from 'ionic-angular/umd/util/util';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public toastController: ToastController,public alertController: AlertController) {

  }
  removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = this.toastController.create({
      message: 'Removing Item - .' + index + "...",
      duration: 3000
    });
    toast.present();

    this.items.splice(index, 1)


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
            this.items.push(item);



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
            this.items[index] = item;


          }
        }
      ]
    });
    alert.present();
  }




}


