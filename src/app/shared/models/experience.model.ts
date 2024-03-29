import { BaseModel } from '@app/core/model-builder/base-model';
import { Property, PropertyValueType } from '@app/core/model-builder/property';

export class ExperienceModel extends BaseModel {
  @Property({
    type: PropertyValueType.String,
    label: 'Title'
  })
  title: string;

  @Property({
    type: PropertyValueType.String,
    label: 'Location'
  })
  location: string;

  @Property({
    type: PropertyValueType.String,
    label: 'Description'
  })
  description: string;

  @Property({
    type: PropertyValueType.String,
    label: 'Entity'
  })
  entity: string;

  @Property({
    type: PropertyValueType.String,
    label: 'Entity',
    path: '../../../assets/logo/'
  })
  image: string;

  @Property({
    type: PropertyValueType.String,
    label: 'Entity',
    icon: true
  })
  icon: string;

  @Property({
    type: PropertyValueType.String,
    label: 'Date'
  })
  date: string;

  constructor(data: Object) {
    super(data);
  }
}
