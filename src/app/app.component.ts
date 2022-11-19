import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoListFront';
  refreshGrid:boolean = false;

  refreshList($event:any){
    this.refreshGrid=!this.refreshGrid;
  }
}

