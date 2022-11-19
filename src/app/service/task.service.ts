import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private readonly API_URL = "http://localhost:8080"

    private readonly ENDPOINT_TASKS = "/tasks"

    constructor(private http: HttpClient) { }

    getTasks():Observable<any> {
        return this.http.get(this.API_URL + this.ENDPOINT_TASKS);
    }

    postTask(task: Task):Observable<any> {
        return this.http.post(this.API_URL + this.ENDPOINT_TASKS, task);
    }

    update(id:any, task:Task):Observable<any> {
        return this.http.put(`${this.API_URL}/${this.ENDPOINT_TASKS}`,task);
    }

    deleteTask(id: number):Observable<any> {
        return this.http.delete(this.API_URL + this.ENDPOINT_TASKS + "/" + id);
    }

}
