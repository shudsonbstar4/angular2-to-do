import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './../../helpers/rxjs-operators';

import { Task } from './task';

@Injectable()
export class TaskService {
    constructor (private http: Http) {}
    
    private tasksUrl = '../app/components/seed-data/mock-tasks.json'; //URL to the web API
    
    getTasks (): Observable<Task[]> {
        return this.http.get(this.tasksUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    addTask (name: string): Observable<Task> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this.tasksUrl, body, options)
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
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}