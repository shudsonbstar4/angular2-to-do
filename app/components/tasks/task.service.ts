import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';

import { Task } from './task';
import { Observable } from 'rxjs/Observable';
import './../../helpers/rxjs-operators';

@Injectable()
export class TaskService {
    constructor (private http: Http) {}
    
    private tasksUrl = '../app/components/seed-data/mock-tasks.json';
    
    getTasks (): Observable<Task[]> {
        return this.http.get(this.tasksUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    
    private extractData(res:Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        
        let body = res.json();
        return body.data || { };
    }
    
    private handleError (error: any) {
        let errorMessage = error.message || 'Server error';
        console.error(errorMessage); //log to console
        return Observable.throw(errorMessage);
    }
}