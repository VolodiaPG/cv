import { Component, OnInit } from '@angular/core';
import { BaseComponent, ComponentRegistryService } from '@app/shared/components';
import { ProgressChartModel } from '@app/shared/models/progress-chart.model';
import { ProgressChartLoaderService } from '@app/shared/models/progress-chart.service';

// data
import skills from '../../../assets/json/skills.json';

@Component({
  selector: 'app-progress-bar-chart',
  templateUrl: './progress-bar-chart.component.html',
  styleUrls: ['./progress-bar-chart.component.scss']
})
export class ProgressBarChartComponent extends BaseComponent implements OnInit {
  data: ProgressChartModel[];

  constructor(componentRegistry: ComponentRegistryService, private progressChartLoader: ProgressChartLoaderService) {
    super(componentRegistry);
    // this.data = new Array();
  }

  ngOnInit() {
    this.init(() => {
      this.data = this.progressChartLoader.load(skills, ProgressChartModel);
      this.data.sort((a: ProgressChartModel, b: ProgressChartModel) => {
        return a.title.localeCompare(b.title);
      });

      // cut the array in half for the two columns
      // this.data[0] = data.slice(0, data.length / 2)
      // this.data[1] = data.slice(data.length / 2, data.length + 1)// to include the last element
    });
  }
}
