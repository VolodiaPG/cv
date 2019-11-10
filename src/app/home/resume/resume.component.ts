import { Component, OnInit } from '@angular/core';
import { ComponentId, ComponentRegistryService } from '@app/shared/components';
import experiences from '../../../assets/json/experiences.json';
import { ExperienceModel } from '@app/shared/models/experience.model';
import { ExperienceLoaderService } from '@app/shared/models/experienceLoarder.service.js';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  /**
   * Make it available for the scopes
   */
  componentId = ComponentId;

  private experience: ExperienceModel[];
  private education: ExperienceModel[];

  constructor(private componentRegistry: ComponentRegistryService, private experienceLoader: ExperienceLoaderService) {}

  ngOnInit() {
    // load the data
    this.education = this.experienceLoader.load(experiences.education, ExperienceModel);
    this.experience = this.experienceLoader.load(experiences.experience, ExperienceModel);

    // update the component registry
    this.componentRegistry.add(ComponentId.EducationList);
    this.componentRegistry.add(ComponentId.ExperiencesList);
  }

  loadExperience(): ExperienceModel[] {
    return this.experience;
  }

  loadEducation(): ExperienceModel[] {
    return this.education;
  }
}
