import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Results } from 'src/app/models/results.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: Results;
  flag : boolean = false;
  query : string ;

  constructor( private _activateRoute: ActivatedRoute, private _httpService : HttpService) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(params => {
      this.query = params['query'];
      this._httpService.getResult(this.query).subscribe(( resultados : Results) => {
        this.results = resultados;
      })
      console.log(this.results);
    });
  }

}
