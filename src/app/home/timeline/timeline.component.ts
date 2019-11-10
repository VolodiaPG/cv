import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BaseComponent, ComponentRegistryService } from '@app/shared/components';
import { BaseModelLoaderService } from '../../core/model-builder/base-model-loader.service';
import { BaseModel } from '@app/core/model-builder/base-model';
import { ExperienceModel } from '@app/shared/models/experience.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent extends BaseComponent implements OnInit, OnDestroy {
  /**
   * The data to be represented
   */
  @Input()
  data: ExperienceModel[];

  constructor(componentRegistry: ComponentRegistryService, private loader: BaseModelLoaderService) {
    super(componentRegistry);
  }

  ngOnInit(): void {
    this.init();
    // this.init(() =>
    // {
    //   this.data = this.loader.load(experiences, ExperienceModel);
    // });
  }

  ngOnDestroy(): void {
    this.dispose();
  }
}
