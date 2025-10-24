import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://demo.jejakpustaka.com/api/auth';

  constructor(private http: HttpClient) {}

  login(data: any) {
    console.log(data)
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }
}
