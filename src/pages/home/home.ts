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

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {


    data: DevicesSearchModel=new DevicesSearchModel();
    errorMessage: string;
    page = 1;
    size = 25;
    perPage = 0;
    totalData = 0;
    totalPage = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public restApi: RestApiProvider) {

        this.getDevices();

    }

    public getDevices() {
        this.restApi.getDevices(this.size, this.page)
            .subscribe(
                res => {
                    this.data = res;
                    console.log(this.data);
                    this.perPage = this.data.size;
                    this.totalData = this.data.total_elements;
                    this.totalPage = this.data.total_pages;
                });
    };




    doInfinite(infiniteScroll) {
        this.page = this.page + 1;
        setTimeout(() => {
            this.restApi.getDevices(this.size, this.page)
                .subscribe((res: DevicesSearchModel) => {
                    let dat=res as DevicesSearchModel;
                    this.perPage = dat.size;
                    this.totalData = dat.total_elements;
                    this.totalPage = dat.total_pages;
                    for (let i = 0; i < dat.content.length; i++) {
                        this.data.content.push(dat.content[i]);
                    }
                }),
                console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    }

}
