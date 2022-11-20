import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/service/task.service';
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']

})
export class AddTaskComponent implements OnInit {

    @Output() 
    refreshList = new EventEmitter();
    value="Clear me"
    task:any = {
        theTask : ''
    }

 

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
    }

    addTask():void {
        this.taskService.postTask(this.task)
            .subscribe({
                next: (response) =>{
                    console.log(response);
                    this.refreshList.emit('refresh');
                    this.task.theTask = '';
                },
                error: (e) => console.error(e)
            });
    }

}
