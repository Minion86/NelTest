import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PopoverController} from 'ionic-angular';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {RestApiProvider} from '../../providers/rest-api/rest-api';
import {DevicesSearchModel} from './devices.model';
import {DevicesModel} from './devices.model';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {


    data: DevicesSearchModel = new DevicesSearchModel();
    errorMessage: string;
    page = 1;
    size = 25;
    perPage = 0;
    totalData = 0;
    totalPage = 0;
    tab = '';

    constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public restApi: RestApiProvider) {
        this.tab = "id";
        this.getDevices();

    }

    public getDevices() {
        this.restApi.getDevices(this.size, this.page, this.tab)
            .subscribe(
                res => {
                    this.data = res;
                    this.sortConnected();
                    console.log(this.data);
                    this.perPage = this.data.size;
                    this.totalData = this.data.total_elements;
                    this.totalPage = this.data.total_pages;
                });
    };


    // The API's connected ordering is unreliable, so enforce connected-first locally (stable).
    private sortConnected() {
        if (this.tab != 'connected' || !this.data.content) {
            return;
        }
        const isOn = (d: DevicesModel) => String(d.connected) === 'true';
        this.data.content = this.data.content
            .map((d, i) => ({d: d, i: i}))
            .sort((a, b) => (Number(isOn(b.d)) - Number(isOn(a.d))) || (a.i - b.i))
            .map(x => x.d);
    }

    selectTab(value, $event) {
        $event.stopPropagation();
        this.tab = value;
        this.page = 1;
        this.size = 25;
        this.perPage = 0;
        this.totalData = 0;
        this.totalPage = 0;
        this.data = new DevicesSearchModel();
        this.getDevices();

    }


    details(value, $event) {
        $event.stopPropagation();
        this.navCtrl.push("DetailsHomePage", {
            device: value as DevicesModel
        });

    }


    doInfinite(infiniteScroll) {
        this.page = this.page + 1;
        setTimeout(() => {
            this.restApi.getDevices(this.size, this.page, this.tab)
                .subscribe((res: DevicesSearchModel) => {
                    let dat = res as DevicesSearchModel;
                    this.perPage = dat.size;
                    this.totalData = dat.total_elements;
                    this.totalPage = dat.total_pages;
                    for (let i = 0; i < dat.content.length; i++) {
                        this.data.content.push(dat.content[i]);
                    }
                    this.sortConnected();
                }),
                console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    }

}
