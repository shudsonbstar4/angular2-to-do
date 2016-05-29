import { Inject, Component, OnInit } from '@angular/core';
import { Task, TaskService } from './index'; //TASKS is an exported array of tasks based on the class Task, whereas Task is the class itself

@Component({
    templateUrl: './app/components/home/home.view.html',
    providers: [TaskService]
})

export class HomeComponent implements OnInit {
    
    constructor(private http: Http) { //Task Service is being INJECTED into the constructor so it's an instance of the TaskService
        this.task = Task;
        this.http = http;
        
//        getTasks() {
//            this.task.getTasks.then((tasks) => {
//               this.tasks = tasks; 
//            });
//        }
    }

    //tasks: Task[];
    
    getTasks():void {
        this.loading = true;
        this.http.request('../seed-data/mock-tasks.json')
            .subscribe((res: Response) => {
                this.tasks = res.json();
                this.loading = false;
            });
    }
    
    ngOnInit() {
        this.getTasks(); //this is a best practice. It ensures that the tasks are called on creation of the component, but it's not calling the get method of the service in the component's constructor. Instead it uses the lifecycle hook to call this method when it instantiates the component. It makes it easier to test/debug this way
        //This service will return an Observable of HTTP data
    }
    
}