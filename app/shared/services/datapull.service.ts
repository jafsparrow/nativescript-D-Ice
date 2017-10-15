import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class DataPullService {
    private serverUrl = "http://34.211.173.234/product/manufacturer/1/?available=true";

    private orderCreateURL = "http://34.211.173.234/orders/distributor/1/";
    incartURL = "http://34.211.173.234/orders/distributor/1/?status=in_cart";
    placeholderURL = "http://jsonplaceholder.typicode.com/posts";

    placeHolderData = {
        "userId": 1,
        
        "title": "test hello rovident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }

    
        constructor(private http: Http) { }
    
        getProducts() {
            let headers = this.createRequestHeader();
            return this.http.get(this.serverUrl, { headers: headers })
                .map(res => res.json());
        }
    
        getResponseInfo() {
            let headers = this.createRequestHeader();
            return this.http.get(this.serverUrl, { headers: headers })
                .do(res => res);
        }
    
        private createRequestHeader() {
            let headers = new Headers();
            // set headers here e.g.
            headers.append("AuthKey", "my-key");
            headers.append("AuthToken", "my-token");
            headers.append("Content-Type", "application/json");
    
            return headers;
        }


        postData(data: any) {
            let options = this.createRequestOptions();
            return this.http.post(this.serverUrl, { data }, options)
                .map(res => res.json());
        }
    
        private createRequestOptions() {
            let headers = new Headers();
            // headers.append("AuthKey", "my-key");
            // headers.append("AuthToken", "my-token");
            headers.append("Content-Type", "application/json");
            let options = new RequestOptions({ headers: headers });
            return options;

        }

        createOrder(products: any[]) {
            let data = { distributor_id:1, ordered_products: products}
            console.log(JSON.stringify(data));
            let options = this.createRequestOptions();
            return this.http.post(this.orderCreateURL, JSON.stringify(data), options)
                

        }


        createPlaceholderPOST() {
            return this.http.post(this.placeholderURL, this.placeHolderData);
        }

        getCartItems() {
            return this.http.get(this.incartURL)
        }
}