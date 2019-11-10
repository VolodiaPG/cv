import { Component, OnInit, Input } from '@angular/core';
import { ProgressChartModel } from '@app/shared/models/progress-chart.model';

@Component({
  selector: 'app-progress-element',
  templateUrl: './progress-element.component.html',
  styleUrls: ['./progress-element.component.scss']
})
export class ProgressElementComponent implements OnInit {
  @Input()
  model: ProgressChartModel;

  constructor() {}

  ngOnInit() {}

  get completion(): number {
    return this.model.completion;
  }

  /**
   * Returns the fontawesome class
   */
  get icon(): string {
    return this.model.icon;
  }

  /**
   * return the css color
   */
  get color(): string {
    return this.model.color;
  }
}
