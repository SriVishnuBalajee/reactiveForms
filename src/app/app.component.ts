import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForms';
  userList:any[]=[];
  addUser(uData:any){
    console.log(uData.value);
    this.userList.push(uData);
  }
}
