import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../model/task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tasks?:Task[];
  @Input()
  refreshGrid:boolean =false;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks():void {
    this.taskService.getTasks()
        .subscribe({
            next:(data) => {
                this.tasks = data;
            },
            error:(e) => console.error(e)
        })
  }

  deleteTask(id:number):void {
    this.taskService.deleteTask(id)
        .subscribe({
            next:(res) => {
                console.log(res);
                this.getAllTasks();
            },
            error: (e) => console.error(e)
        });
  }

  ngOnChanges(){
    this.getAllTasks();
  }

}
