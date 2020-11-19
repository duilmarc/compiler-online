import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Results } from 'src/app/models/results.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor( private _router : Router  ) { }

  ngOnInit(): void {
    
  }

  sendCode( query : string ){
    this._router.navigate(["result",query]);
  }
  clean(element:any)
  {
    this._router.navigate(["home"]);
  }
}

