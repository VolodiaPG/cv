import { Component, OnInit } from '@angular/core';
import { ComponentId, ComponentRegistryService } from '@app/shared/components';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  componentId = ComponentId;

  constructor(private componentRegistry: ComponentRegistryService) {}

  ngOnInit() {
    this.componentRegistry.add(ComponentId.ExperiencesList);
  }
}
