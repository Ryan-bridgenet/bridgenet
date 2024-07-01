import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bridgenet';

  readonly APIURL="http://localhost:5038/api/todoapp"

  constructor(private http:HttpClient) {
  }
  users:any =[]
  jobs:any =[]
  contractor:any =[]



}
