import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brew } from './model/Brew';
import { tap , delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  myMethod() {
    return console.log('Hey, what is up!');
  }

  getSomethingUsingObservable() {
    return this.http.get<Brew[]>('https://api.openbrewerydb.org/breweries')
    .pipe(
      delay(5000))
      // tap(console.log))
  }

  getSomethingUsingPromise() { 
    return this.http.get<Brew[]>('https://api.openbrewerydb.org/breweries').toPromise();
  }

  getSomethingUsingSubscribe() {
    return this.http.get<Brew[]>('https://api.openbrewerydb.org/breweries')
  }

}
