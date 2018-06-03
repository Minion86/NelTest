import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PopoverController} from 'ionic-angular';
import {DevicesModel} from '../../pages/home/devices.model';

@IonicPage()
@Component({
    selector: 'page-details-home',
    templateUrl: 'details-home.html',
})
export class DetailsHomePage {

    data: DevicesModel = new DevicesModel();
    constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
        this.data = navParams.get("device");

    }


}
