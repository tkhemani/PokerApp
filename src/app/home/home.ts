import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../counter';

import { Observable } from 'rxjs';

interface AppState {
  counter: number;
}


@Component({})
export class Home {
  counter: Observable<any>;

    constructor(public store: Store<AppState>){
        this.counter = store.select('counter');
    }

    increment(){
      console.log('Yolo');
        this.store.dispatch({ type: INCREMENT });
    }

    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }

    reset(){
        this.store.dispatch({ type: RESET });
    }
}

@Component({
  template: `
    <div>
      YOLO
    </div>
  `
})
export class Yolo {
  constructor() {
    console.log('Yolo');
  }
}
