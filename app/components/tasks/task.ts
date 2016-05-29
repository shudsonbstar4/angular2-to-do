import { Http, Response } from '@angular/http';

export class Task { //This is the "model" for our Task obj. TS lets us declare the types that the properties should be. It should be used as a reference "map" for forming each Task instance
    constructor(
        public id:number,
        public name: string,
        public completed: Boolean,
        public http: Http,
        public data: any,
        public loading: Boolean
    ) {  } //by using public, we don't have to write it like:
    
    /*
        http: Http;
        
        constructor(http: Http) {
            this.http = http;
        }
    */
    
    
//    getTasks() {
//        this.loading = true;
//        return this.http.request('../seed-data/mock-tasks.json')
//            .subscribe((res: Response) => {
//                this.data = res.json(); 
//                return this.data;
//                //this.loading = false;
//            });
//    }
    
    
}