import { Component, OnInit, Input } from '@angular/core';
import { BaseModel } from '@app/core/model-builder/base-model';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss']
})
export class TimelineCardComponent implements OnInit {
  /**
   * The config object relative to `componentConfigs`
   */
  @Input()
  config: object;

  /**
   * The model to apply the processing to
   */
  @Input()
  model: BaseModel;

  /**
   * Tells if the card should be displayed inverted, ie. on the right of the chronological line
   */
  @Input()
  inverted = false;

  constructor() {}

  ngOnInit() {}

  /**
   * Returns the value of the property, after find its associated key inside `componentConfigs`
   * @param property The name of the property to get
   * @returns the object retrieved or `undefined`
   */
  getProperty(property: string): string {
    let ret = this.model[this.config['cols'][property].property];

    if (ret && property === 'image') {
      //get the metadata of the path
      ret = this.model.getPropertyMeta('image').path + '/' + ret;
    }

    return ret;
  }

  /**
   * Checks the existance of a certain key both inside the `componentConfigs` and in the model
   * @param property the name of the property to check
   * @returns `true` if the property exists
   */
  exists(property: string): boolean {
    // using this syntax in order not to access undefined elements
    return !this.config['cols'][property] ? false : !this.getProperty(property) ? false : true;
  }
}
