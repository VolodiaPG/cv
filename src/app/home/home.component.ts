import { Component, OnInit } from '@angular/core';
import { ComponentId } from '../shared/components/components';
import { ComponentRegistryService } from '@app/shared/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /**
   * Make it available for the scopes
   */
  componentId = ComponentId;

  constructor(private componentRegistry: ComponentRegistryService) {}

  ngOnInit() {
    //update the registry
    this.componentRegistry.add(ComponentId.ExperiencesList);
  }
}
