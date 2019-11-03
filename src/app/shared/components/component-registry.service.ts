import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, pluck } from 'rxjs/operators';
import { ComponentId } from './components';
import { componentConfigs } from './componentConfig';
import { Logger } from '@app/core';

export type State = { [key: string]: object };

const state: State = {};

@Injectable({
  providedIn: 'root'
})
export class ComponentRegistryService {
  private subject = new BehaviorSubject<State>(state);
  store = this.subject.asObservable().pipe(distinctUntilChanged());

  constructor() {}

  select(id: ComponentId): Observable<object> {
    return this.store.pipe(
      pluck(id),
      map(conf => {
        return Object.freeze(conf);
      })
    );
  }

  add(id: ComponentId) {
    const value = this.subject.value;
    this.subject.next(Object.assign({}, value, { [id]: componentConfigs.find(c => c['id'] === id) }));
  }

  update(id: ComponentId, config: object) {
    const value = this.subject.value;
    this.subject.next(Object.assign({}, value, { [id]: config }));
  }
}
