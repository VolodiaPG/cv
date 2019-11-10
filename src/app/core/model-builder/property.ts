export const PROPERTY_PREFIX = 'property:';

/**
 * Possible types that we can use to describe a property
 */
export enum PropertyValueType {
  String = 0,
  Number,
  DateTime,
  Select,
  Object,
  Boolean,
  Array,
  Email,
  Password
}

/**
 * Strongly typed interface for the metadata needs
 */
export interface IPropertyMeta {
  type: PropertyValueType;
  label: string;
  hidden?: boolean;
  icon?: boolean;
  path?: string;
}

/**
 * String enums to join with the prefix to use on the keys
 */
export enum PropertyMetadataProperies {
  type = 'type',
  label = 'label',
  editable = 'editable',
  hidden = 'hidden',
  icon = 'icon',
  required = 'required',
  tranlate = 'translate',
  path = 'path'
}

export function Property(meta: IPropertyMeta) {
  return (target: object, propertyKey: string) => {
    if (meta !== undefined && meta !== null) {
      Object.keys(meta).forEach(key => {
        Reflect.defineMetadata(`${PROPERTY_PREFIX}${PropertyMetadataProperies[key]}`, meta[key], target, propertyKey);
      });
    }
  };
}
