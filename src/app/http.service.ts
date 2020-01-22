import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brew } from './model/Brew'

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
  }

  getSomethingUsingPromise() {
    return this.http.get<Brew[]>('https://api.openbrewerydb.org/breweries').toPromise();
  }

  getSomethingUsingSubscribe() {
    return this.http.get<Brew[]>('https://api.openbrewerydb.org/breweries')
  }

}
