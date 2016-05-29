import { Component } from '@angular/core';


@Component({
    templateUrl: './app/components/home/home.view.html'
})

export class HomeComponent {
    
    constructor() {
        
        this.tasks = [
            { 'id': 1, 'name': 'Wash Dishes', 'completed': false },
            { 'id': 2, 'name': 'Dust furniture', 'completed': false },
            { 'id': 3, 'name': 'Take out trash', 'completed': false }
        ];
        
    }
    
}