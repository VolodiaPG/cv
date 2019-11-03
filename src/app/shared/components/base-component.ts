import { Input } from '@angular/core';
import { ComponentId } from './components';
import { Subscription } from 'rxjs';
import { ComponentRegistryService } from './component-registry.service';

export abstract class BaseComponent {
  @Input()
  id: ComponentId;
  private config$: Subscription;
  private _config: object;

  constructor(protected componentRegistry: ComponentRegistryService) {}

  init(callback?: Function) {
    if (this.id) {
      this.config$ = this.componentRegistry.select(this.id).subscribe((config: object) => {
        this._config = config;
        if (callback) {
          callback();
        }
      });
    }
  }

  get config() {
    return this._config;
  }

  dispose() {
    this.config$.unsubscribe();
  }
}
