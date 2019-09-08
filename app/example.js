import { Observable } from 'rxjs';
// const rxjs = require('rxjs');
const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('complete!')
};

const observable = new Observable(subscriber => {
    subscriber.next('Hellos');
});

observable.subscribe(observer);