import { Component, OnInit } from '@angular/core';
import { Results } from 'src/app/models/results.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public results: Results;

  public flag : boolean = false

  constructor( public _httpService : HttpService ) { }

  ngOnInit(): void {
  }

  sendCode( query : string ){
    this._httpService.getResult(query).subscribe(( resultados : Results) => {
      this.results = resultados;
    })
    console.log(this.results);
  }
}
