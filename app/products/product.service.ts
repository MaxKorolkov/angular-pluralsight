import {Injectable} from "angular2/src/core/di/decorators";
import {IProduct} from "./products";
import {Http} from "angular2/src/http/http";
import {Observable} from 'rxjs/Observable';
import {Response} from "angular2/src/http/static_response";

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';
    constructor(private _http: Http) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}