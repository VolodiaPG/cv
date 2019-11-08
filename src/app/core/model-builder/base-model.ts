import { PROPERTY_PREFIX, IPropertyMeta } from './property';

export abstract class BaseModel {
  /**
   * Constructor
   * @param data The source object to assign over the model
   */
  constructor(data: object) {
    Object.assign(this, data);
  }

  /**
   * Get all metadata from a property
   * @param property the name of the property
   */
  getPropertyMeta(property: string): Partial<IPropertyMeta> {
    const ret = this.getAllMetadata(property, PROPERTY_PREFIX);

    const res = Object.keys(ret).map((key: string) => {
      const newKey = key.replace(PROPERTY_PREFIX, '');
      return { [newKey]: ret[key] };
    });

    return Object.assign({}, ...res);
  }

  /**
   * Retrieves a map of all the metadata from a property
   * @param property the property name
   * @param filterTerm the filter
   */
  getAllMetadata(property: string, filterTerm?: string, replace = true): object {
    //Safe check
    if (!Object.keys(this).includes(property)) {
      throw new Error(`The property ${property} is not present inside ${this.constructor.name}`);
    }

    let keys = Reflect.getMetadataKeys(this, property);
    if (filterTerm) {
      keys = keys.filter(key => key.includes(filterTerm));
    }

    const keysObj = {};

    if (Array.isArray(keys) && keys.length > 0) {
      keys.forEach(key => (keysObj[key] = Reflect.getMetadata(key, this, property)));
    }

    keysObj['property'] = property;

    return keysObj;
  }
}
