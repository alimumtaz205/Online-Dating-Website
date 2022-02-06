import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Friendship App';
  users:any;
  apiUrl='https://localhost:5001/api/users'

  constructor(private http: HttpClient){}
  
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(res=>{
        this.users=res;
    }, error=>{
      console.log(error);
    }
    );
  }
}