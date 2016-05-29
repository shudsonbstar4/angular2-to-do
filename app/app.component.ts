import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Routes([
    { path: '/', component: HomeComponent }
])

@Component({
    selector: 'my-app',
    templateUrl: './app/templates/main.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
