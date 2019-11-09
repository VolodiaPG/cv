import { Component, OnInit, Input } from '@angular/core';
import { BaseModel } from '@app/core/model-builder/base-model';
import { ExperienceModel } from '@app/shared/models/experience.model';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss']
})
export class TimelineCardComponent implements OnInit {
  @Input()
  config: Object;

  @Input()
  model: ExperienceModel;

  constructor() {}

  ngOnInit() {}

  getProperty(property: string): Object {
    return this.model[this.config['cols'][property]['property']];
  }

  exists(property: string): boolean {
    return !this.config['cols'][property] ? false : !this.getProperty(property) ? false : true;
  }
}
