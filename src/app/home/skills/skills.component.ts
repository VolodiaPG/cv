import { Component, OnInit } from '@angular/core';
import { ComponentRegistryService, ComponentId } from '@app/shared/components';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit
{
  // make it available for the scope
  componentId = ComponentId;

  constructor(private componentRegistry: ComponentRegistryService) { }

  ngOnInit()
  {
    this.componentRegistry.add(ComponentId.ProgressBarChart);
  }
}
