import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:any='http://demo.jejakpustaka.com/api/example/users';
  constructor(private http: HttpClient) { }
  tampil(){
    return this.http.get(this.apiUrl);
  }
}

