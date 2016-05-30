import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Task } from './task';
import { Observable } from 'rxjs/Observable';
import './../../helpers/rxjs-operators';
/*

    Here, we used a barrel file to include all the relevant Observable operators, and we're including it here
    
    We could also use:
    
    import { Observable } from 'rxjs/Rx'
    
    to get all of the Observable operators, since .map isn't included in the Observable class by default, but that would cause us to pay a penalty in load time. According to the Angular official documentation, we should add on the operators we need
    
*/

@Injectable()
export class TaskService {
    constructor (private http: Http) {} //injects HTTP and assigns to the constructor; note that we have to include HTTP_PROVIDERS in the bootstrap in order to be able to use DI
    
    private tasksUrl = '../app/components/seed-data/mock-tasks.json'; //URL to the web API
    
    getTasks (): Observable<Task[]> {
        return this.http.get(this.tasksUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    addTask (name: string): Observable<Task> {
        let body = JSON.stringify({ name }); //The post body has to be a string, despite the content type being explicitly declared
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this.tasksUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    
    private extractData(res:Response) { //NOTE: We want to abstract away what the server is doing, so this function should get the array of objects itself -- not the HTTP server response. We don't want our components to know about the response -- just the data. That's the whole point of a service -- to handle the response and make it usable to our components
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        
        let body = res.json(); //This will take our stringified JSON object and parse it into a JSON object that JS can use
        return body.data || { };
    }
    
    private handleError (error: any) {
        //in a real world app, might use remote logging
        let errorMessage = error.message || 'Server error';
        console.error(errorMessage); //log to console
        return Observable.throw(errorMessage);
    }
}