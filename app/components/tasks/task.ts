import { Http, Response } from '@angular/http';

export class Task { 
    constructor(
        public id:number,
        public name: string,
        public completed: Boolean,
        public http: Http,
        public data: any,
        public loading: Boolean
    ) {  }
    
}