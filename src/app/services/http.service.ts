import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from "../models/results.model"
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  private baseUrl : string = environment.BASE_API_URL;

  constructor(private readonly _http:HttpClient) { }

  public getResult( valor : string ){

    let postData = { "code" : valor };

    return this._http.post<Results>(this.baseUrl, postData);
    };
  
}

