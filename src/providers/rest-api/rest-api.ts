import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {DevicesSearchModel} from '../../pages/home/devices.model';


@Injectable()
export class RestApiProvider {
    private apiUrl = 'https://recruitment-test-api.devsandbox.knetikcloud.com/';

    constructor(public http: HttpClient) {
    }

    public getDevices(size: number, page: number, tab: string): Observable<DevicesSearchModel> {

        let order = 'asc';
        if (tab == 'connected') {
            order = 'desc';
        }
        console.log(this.apiUrl + "devices?size=" + size + "&page=" + page + "&order=" + tab + "%3A" + order);
        return this.http.get(this.apiUrl + "devices?size=" + size + "&page=" + page + "&order=" + tab + "%3A" + order)
            .map(res => res as DevicesSearchModel);

    }

}
