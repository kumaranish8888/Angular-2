import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AnishService {

    private _url:string = 'api/employeedata.json';

    constructor(private _http: Http){}

    getEmployees(){
        return this._http.get(this._url)
            .map((response:Response)=>response.json());
    }

}