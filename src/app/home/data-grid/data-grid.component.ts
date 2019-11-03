import { BaseComponent } from '@app/shared/components';
import { OnInit, OnDestroy, Component } from '@angular/core';
import { ComponentRegistryService } from '@app/shared/components/component-registry.service';
import { Logger } from '@app/core';

const log = new Logger();

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html'
})
export class DataGridCompoenent extends BaseComponent implements OnInit, OnDestroy {
  // data: User[];

  constructor(protected componentRegistry: ComponentRegistryService) {
    super(componentRegistry);
  }

  ngOnInit() {
    // this.init(() => {
    //   this.data = [
    //     new User({
    //       name: 'toto',
    //       secret: 'tata'
    //     }),
    //     new User({
    //       name: 'tata',
    //       secret: 'toto'
    //     })
    //   ];
    // });
    // log.debug("Metadata for 'name':", this.data[0].getPropertyMeta('name'));
  }

  ngOnDestroy() {
    this.dispose();
  }
}
