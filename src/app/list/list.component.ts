import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Brew } from '../model/Brew';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Observable<Brew[]>;
  brews2: Brew[];
  brews3: Brew[];

  constructor(public http: HttpService) {

  }

  //note: async is used for method 2 , method 1 and 3 will work without this also 
  async ngOnInit() { 

    this.http.myMethod();
    //1
    //this.data and this.brews are observables so in the html we have to use
    // async pipe
    this.brews = this.http.getSomethingUsingObservable();

    //2
    //this is returning a promise
    this.brews2=await this.http.getSomethingUsingPromise();
   
    //3
    //this returns ob
    this.http.getSomethingUsingSubscribe()
    .subscribe((data)=>
      {
           this.brews3=data;
      })

  }
}
