import { BaseModel } from '@app/core/model-builder/base-model';
import { Property, PropertyValueType } from '@app/core/model-builder/property';

export class ProgressChartModel extends BaseModel {
  @Property({
    type: PropertyValueType.String,
    label: 'Title'
  })
  title: string;

  /**
   * A number between 0 and 1
   */
  @Property({
    type: PropertyValueType.Number,
    label: 'Completion'
  })
  completion: number;

  @Property({
    type: PropertyValueType.String,
    label: 'Icon',
    icon: true
  })
  icon: string;

  @Property({
    type: PropertyValueType.String,
    label: 'Color'
  })
  color: string;

  constructor(object: object) {
    super(object);
  }
}
