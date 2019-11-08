import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent, ComponentRegistryService } from '@app/shared/components';
import { ExperienceModel } from '../../shared/models/experience.model';
import { BaseModelLoaderService } from '../../core/model-builder/base-model-loader.service';

import experiences from '../../../assets/json/experiences.json';
import { Logger } from '@app/core';

const log = new Logger('Resume');

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent extends BaseComponent implements OnInit, OnDestroy {
  data: ExperienceModel[];

  constructor(componentRegistry: ComponentRegistryService, private loader: BaseModelLoaderService) {
    super(componentRegistry);
  }

  ngOnInit(): void {
    this.init(() => {
      this.data = this.loader.load(experiences, ExperienceModel);
      log.debug(this.data);
    });
  }

  ngOnDestroy(): void {
    this.dispose();
  }
}
