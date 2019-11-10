import { ComponentId } from './components';
import { IComponentConfig } from './componentConfig.interface';
// import { baseModel } from '@app/core/model-builder/base-model';
// import { WYPNodeModel } from '../models';
// import { WYPNodeSettingsModel } from '../models/wyp-node-settings.model';

export const componentConfigs: object[] = [
  {
    id: ComponentId.DataTableA,
    url: 'Users',
    cols: [
      {
        property: 'name',
        label: 'Name',
        filter: null
      },
      {
        property: 'secret',
        label: 'Secret',
        filter: null
      }
    ],
    actions: [
      {
        label: 'Remove',
        handler: (row: any, context: any) => {
          console.log(row, context);
        }
      }
    ]
  },
  {
    id: ComponentId.DataList,
    elements: [
      {
        property: 'timezone',
        suffix: 'hours',
        handler: (arg: any) => {
          console.log(arg);
        }
      },
      {
        property: 'text',
        handler: (arg: any) => {
          console.log(arg);
        }
      }
    ]
  },
  {
    id: ComponentId.EducationList,
    cols: {
      title: {
        property: 'title'
      },
      subtitle: {
        property: 'entity'
      },
      subtitleUrl: {
        property: 'entityUrl'
      },
      precision: {
        property: 'location'
      },
      date: {
        property: 'date'
      },
      description: {
        property: 'description'
      },
      icon: {
        property: 'icon'
      },
      image: {
        property: 'image'
      }
    }
  },
  {
    id: ComponentId.ExperiencesList,
    cols: {
      title: {
        property: 'title'
      },
      subtitle: {
        property: 'entity'
      },
      subtitleUrl: {
        property: 'entityUrl'
      },
      precision: {
        property: 'location'
      },
      date: {
        property: 'date'
      },
      description: {
        property: 'description'
      },
      icon: {
        property: 'icon'
      },
      image: {
        property: 'image'
      }
    }
  }
];
