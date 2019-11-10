import { Component, OnInit } from '@angular/core';
import { ComponentRegistryService, componentConfigs } from '@app/shared/components';

@Component({
  selector: 'app-progress-bar-chart',
  templateUrl: './progress-bar-chart.component.html',
  styleUrls: ['./progress-bar-chart.component.scss']
})
export class ProgressBarChartComponent implements OnInit {
  // make it available for the scope
  componentConfigs = componentConfigs;

  constructor(private componentRegistry: ComponentRegistryService) {}

  ngOnInit() {
    // this.componentRegistry.add(componentConfigs)
  }
}
