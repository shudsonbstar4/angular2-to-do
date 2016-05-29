import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/common';
import { Headers, RequestOptions } from '@angular/http';

import { Task, TaskService } from './../home/index'; //TASKS is an exported array of tasks based on the class Task, whereas Task is the class itself


@Component({
    selector: 'task-form',
    templateUrl: './app/components/add-task/task-form.view.html',
    providers: [TaskService]
        
})

export class TaskFormComponent {
    //This is just for demo purposes and to show how to notify a parent component of a child component's actions    
    @Input() name: string;
    @Output() taskAdded = new EventEmitter<Object>(); 
    //End hardcoded
        
    
    task = new Task("4", "New Task", false);
    submitted = false;
    active = true;
    
    constructor(private taskService: TaskService) {}
    
    onSubmit(name: string) { 
        this.submitted = true;
        if (!name) { return; }
        
        //Hardcoded example
        this.task.name = name;
        this.taskAdded.emit(this.task);
        //End hardcoded example
        
        //This is how you'd do it with the server; you'd still need to emit the event to the parent
//        this.taskService.addTask(name)
//                        .subscribe(
//                            task => this.tasks.push(task),
//                            error => this.errorMessage = <any>error);
    }

    newTask() {
//        this.task = new Task
        this.active = false; //Adding the active flag and using ngIf on the form means that we're removing it from the DOM and adding it back, so we reset the "pristine" state
        setTimeout(()=> this.active=true, 0);
    }
    
    //REMOVE THIS WHEN WE'RE DONE
    get diagnostic() { return JSON.stringify(this.task); } //This will let us see the JSON version of our model for debug
    
}