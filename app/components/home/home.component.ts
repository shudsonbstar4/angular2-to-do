import { Component } from '@angular/core';

import { Task } from './../tasks/task';


@Component({
    templateUrl: './app/components/home/home.view.html'
})

export class HomeComponent {
    
    tasks: Task[];
    
    constructor() {  //pass the task model in   
        this.tasks = [
            new Task( 1, 'Wash Dishes', false),
            new Task( 2, 'Dust furniture', false),
            new Task( 3, 'Take out the trash', false)
        ];
        
    }
    
}