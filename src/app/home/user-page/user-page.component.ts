import { ComponentRegistryService } from '@app/shared/components/component-registry.service';
import { ComponentId } from '@app/shared/components/components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html'
})
export class UserPageComponent implements OnInit {
  componentId = ComponentId;

  constructor(private componentRegistry: ComponentRegistryService) {}

  ngOnInit() {
    this.componentRegistry.add(ComponentId.DataTableA);
  }
}
