import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cobacoba';
  constructor(
    public api:ApiService
      ){
        this.getBaca();
      }
  
  dataUsers:any = [];
  getBaca(){
    this.api.tampil().subscribe(res =>{
      console.log(res);
      this.dataUsers = res;
    })
  }
  
  hapus(x:any){
    let id = this.dataUsers.indexOf(x);
  console.log(id)
  if (id !== null) {
    this.dataUsers.splice(x,1)
  }
  }
  }
