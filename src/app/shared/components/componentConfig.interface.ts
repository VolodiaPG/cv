import { ComponentId } from './components';
// import { baseModel } from '@app/core/model-builder/base-model';

export interface IComponentConfig {
  id: ComponentId;
  url: string;
  cols: ICols[];
  actions: IActions[];
}

export interface ICols {
  property: string;
  label: string;
  filter: string | null;
}

export interface IActions {
  label: string;
  handler: (row: any, context: any) => void;
}

// export type ModelCallback = (model: baseModel) => string;

// export interface TextArea {
//   prefix?: ModelCallback | string;
//   content?: ModelCallback | string;
//   suffix?: ModelCallback | string;
// }
