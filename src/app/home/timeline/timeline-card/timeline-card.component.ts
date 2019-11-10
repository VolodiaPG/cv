import { Component, OnInit, Input } from '@angular/core';
import { BaseModel } from '@app/core/model-builder/base-model';

/**
 * Caches the asked property to reduce object manipulation
 */
class Cache {
  content: string;
  key = '';
  set = false;
}

enum IconType {
  Image,
  Icon,
  None
}

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

  /**
   * Temporary cache to store there last accessed property
   */
  private cache: Cache;

  constructor() {
    this.cache = new Cache();
  }

  ngOnInit() {}

  /**
   * Returns the value of the property, after find its associated key inside `componentConfigs`
   * @param property The name of the property to get
   * @returns the object retrieved or `undefined`
   */
  getProperty(property: string): string {
    if (!(this.cache.set && this.cache.key === property)) {
      this.cache.set = true;
      this.cache.key = property;
      this.cache.content = this.model[this.config['cols'][property]['property']];
    }

    if (property === 'image') {
      //get the metadata of the path
      this.cache.content = this.model.getPropertyMeta('image').path + '/' + this.cache.content;
    }

    console.log(this.cache.content);

    return this.cache.content;
  }

  /**
   * Checks the existance of a certain key both inside the `componentConfigs` and in the model
   * @param property the name of the property to check
   * @returns `true` if the property exists
   */
  exists(property: string): boolean {
    if (this.cache.set && this.cache.key === property) {
      // cache already set, no need to redo the process
      return true;
    }

    this.cache.set = false;

    // using this syntax in order not to access undefined elements
    return !(this.cache.key = this.config['cols'][property])
      ? false
      : !(this.cache.content = this.getProperty(property))
      ? false
      : (this.cache.set = true);
  }
}
