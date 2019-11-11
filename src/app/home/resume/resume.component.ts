import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComponentId, ComponentRegistryService } from '@app/shared/components';
import { ExperienceModel } from '@app/shared/models/experience.model';
import { ExperienceLoaderService } from '@app/shared/models/experienceLoarder.service.js';
import { I18nService } from '@app/core';
import { LangChangeEvent } from '@ngx-translate/core';

import experiences from '../../../assets/json/experiences.json';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, OnDestroy {
  /**
   * Make it available for the scopes
   */
  componentId = ComponentId;

  private experience: ExperienceModel[];
  private education: ExperienceModel[];

  private langChange$: Subscription;
  /**
   * Keys reprents the langs added
   */
  private langsAdded: Map<string, boolean>;

  constructor(
    private componentRegistry: ComponentRegistryService,
    private experienceLoader: ExperienceLoaderService,
    private i18n: I18nService
  ) {
    this.langsAdded = new Map<string, boolean>();
  }

  ngOnInit() {
    // load the data
    // this.education = this.experienceLoader.load(experiences.education, ExperienceModel);
    // this.experience = this.experienceLoader.load(experiences.experience, ExperienceModel);

    this.addLang('en-US', experiences.education['en-US']);
    this.addLang('fr-FR', experiences.education['fr-FR']);
    this.addLang('es-ES', experiences.education['es-ES']);

    this.addLang('en-US', experiences.experience['en-US']);
    this.addLang('fr-FR', experiences.experience['fr-FR']);
    this.addLang('es-ES', experiences.experience['es-ES']);

    console.log(experiences);
    this.selectLang(this.i18n.language);

    // update the component registry
    this.componentRegistry.add(ComponentId.EducationList);
    this.componentRegistry.add(ComponentId.ExperiencesList);

    // subscribe to internalization
    this.langChange$ = this.i18n.langChange$.subscribe((event: LangChangeEvent) => this.onLangChange(event));
  }

  ngOnDestroy() {
    if (this.langChange$) this.langChange$.unsubscribe();
  }

  private onLangChange(event: LangChangeEvent) {
    console.log(this);
    console.log(event);
    console.log(this.i18n.language);

    this.selectLang(event.lang);
  }

  private addLang(lang: string, translation: object) {
    this.langsAdded.set(lang, true);
    this.i18n.mergeTranslation(lang, translation);
  }

  private selectLang(lang: string) {
    // console.log(experiences.ed[lang]);
    // console.log(this.education[lang]);

    if (this.langsAdded.get(lang) && experiences.education[lang] && experiences.experience[lang]) {
      this.education = this.experienceLoader.load(experiences.education[lang], ExperienceModel);
      this.experience = this.experienceLoader.load(experiences.experience[lang], ExperienceModel);
    } else {
      this.education = this.experienceLoader.load(experiences.education[this.i18n.defaultLanguage], ExperienceModel);
      this.experience = this.experienceLoader.load(experiences.experience[this.i18n.defaultLanguage], ExperienceModel);
    }
  }

  loadExperience(): ExperienceModel[] {
    return this.experience;
  }

  loadEducation(): ExperienceModel[] {
    return this.education;
  }
}
