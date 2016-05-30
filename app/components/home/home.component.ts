import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from './index'; //TASKS is an exported array of tasks based on the class Task, whereas Task is the class itself

import { TaskFormComponent } from './../add-task/task-form.component';

@Component({
    templateUrl: './app/components/home/home.view.html',
    providers: [TaskService],
    directives: [TaskFormComponent]
})

export class HomeComponent implements OnInit {
    
    constructor(private taskService: TaskService) { //Task Service is being INJECTED into the constructor so it's an instance of the TaskService
        //this.task = task;
        
//        getTasks():void {
//            this.loading = true;
//            this.http.request('../seed-data/mock-tasks.json')
//                .subscribe((res: Response) => {
//                    this.data = res.json();
//                    this.loading = false;
//                });
//        }
        
//        getTasks() {
//            this.task.getTasks.then((tasks) => {
//               this.tasks = tasks; 
//            });
//        }
    }

        errorMessage: string;
        tasks: Task[];
        mode = 'Observable'; //Can fall back to Promises, but we should use Observables due to 'streams'
    
    ngOnInit() {
        this.getTasks(); //this is a best practice. It ensures that the tasks are called on creation of the component, but it's not calling the get method of the service in the component's constructor. Instead it uses the lifecycle hook to call this method when it instantiates the component. It makes it easier to test/debug this way
        //This service will return an Observable of HTTP data
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