import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name!: string;
  names=["eslam","youssef","lmatadour"];
  addName(){
    this.names.push(this.name);
  }
  removeName(item:any){
    let index=this.names.indexOf(item);
    this.names.splice(index,1);
  }
  print(username:any){
    console.log(username);
  }
}
