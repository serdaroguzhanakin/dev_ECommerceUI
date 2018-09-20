import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ProductService {

    constructor(private httpClient: HttpClient, private http: Http, ) {

    }

    productUrl: string = 'http://localhost:56921/api/product';
    productList: Product[] = [];
    product: Product;
    // getProducts(): Observable<Product[]> {
    //     return this._http.get<Product[]>(this.productUrl)
    // }

    data: any={};
    getProduct() {
        this.http.get(this.productUrl, null).subscribe(data => {
            console.log('merhaba ozz-product.service'+data);
            console.log(data);
            this.data=data;
        })



        return this.http.get(this.productUrl, null)
    }
}