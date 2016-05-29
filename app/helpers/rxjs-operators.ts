/*
    Barrel File for the RxJS Operators to include
    
    We could also use:
    
    import { Observable } from 'rxjs/Rx'
    
    to get all of the Observable operators, since .map isn't included in the Observable class by default, but that would cause us to pay a penalty in load time. According to the Angular official documentation, we should add on the operators we need
    
*/

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';