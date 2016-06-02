import { Inject, Component, OnInit } from '@angular/core';
import { Task, TaskService } from './index'; //TASKS is an exported array of tasks based on the class Task, whereas Task is the class itself

@Component({
    templateUrl: './app/components/home/home.view.html',
    providers: [TaskService]
})

export class HomeComponent implements OnInit {
    
    errorMessage: string;
    tasks: Task[];
    mode = 'Observable';
   
    constructor(private taskService: TaskService) { }

    getTasks() {
        this.taskService.getTasks()
            .subscribe(
                tasks => this.tasks = tasks,
                error => this.errorMessage = <any>error
            );
    }
    
    ngOnInit() {
        this.getTasks();
    }
    
}