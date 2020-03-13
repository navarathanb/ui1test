import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {Products} from './products';

@Injectable()

export class productService {
    url : string = 'app/products.json';
    constructor(private http: Http) {

    }

    getProductsData():Observable <Products[]> {
        return this.http.get(this.url).map((response:Response)=> <Products[]> response.json() );
    }
}

