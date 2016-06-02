import { Component, OnInit } from '@angular/core';

import { Task, TaskService } from './index';
import { TaskFormComponent } from './../add-task/task-form.component';

@Component({
    templateUrl: './app/components/home/home.view.html',
    providers: [TaskService],
    directives: [TaskFormComponent]
})

export class HomeComponent implements OnInit {
    
    constructor(private taskService: TaskService) { }

        errorMessage: string;
        tasks: Task[];
        mode = 'Observable'; //Can fall back to Promises, but we should use Observables due to 'streams'
    
    ngOnInit() {
        this.getTasks();
    }
    
    getTasks() {
        this.taskService.getTasks()
            .subscribe(
                tasks => this.tasks = tasks,
                error => this.errorMessage = <any>error
            );
    }
    
    taskAdded(task: any) {
        this.tasks.push(task);
    }
    
    deleteTask(taskId: any) {
        let i = 0;
        let tasksLength = this.tasks.length;
        
        for (i; i < tasksLength; i++){
            if(this.tasks[i].id === taskId){
                this.tasks.splice(i, 1);
                break;
            }
        }
    }
    
}