import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Results } from "../models/results.model"
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  private baseUrl : string = environment.BASE_API_URL;

  constructor(private readonly _http:HttpClient) { }

  public getResult( valor : string ){

    let json = { "code" : valor };
    let headers = new HttpHeaders(); 
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin','*');
    headers.append( 'Access-Control-Allow-Methods','GET');
    let params = new HttpParams().set("requestData", JSON.stringify(json));
    
    return this._http.get<Results>(this.baseUrl,{params : params});
  }
}
