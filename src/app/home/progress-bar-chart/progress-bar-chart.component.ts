import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { BaseComponent, ComponentRegistryService } from '@app/shared/components';
import { ProgressChartModel } from '@app/shared/models/progress-chart.model';
import { ProgressChartLoaderService } from '@app/shared/models/progress-chart.service';

import * as Multiple from 'multiple.js';

// data
import skills from '../../../assets/json/skills.json';

@Component({
  selector: 'app-progress-bar-chart',
  templateUrl: './progress-bar-chart.component.html',
  styleUrls: ['./progress-bar-chart.component.scss']
})
export class ProgressBarChartComponent extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {
  data: ProgressChartModel[];

  private multiple: any;

  constructor(componentRegistry: ComponentRegistryService, private progressChartLoader: ProgressChartLoaderService) {
    super(componentRegistry);
  }

  ngOnInit() {
    this.init(() => {
      this.data = this.progressChartLoader.load(skills, ProgressChartModel);
      this.data.sort((a: ProgressChartModel, b: ProgressChartModel) => {
        return a.title.localeCompare(b.title);
      });
    });
  }
  ngAfterViewInit(): void {
    this.multiple = new Multiple({
      selector: '.item-shared-background',
      background: 'linear-gradient(117deg, rgba(131,58,180,1) 23%, rgba(253,29,29,1) 47%, rgba(252,176,69,1) 100%)'
    });
  }

  ngOnDestroy(): void {
    this.multiple.destroy();
  }
}
