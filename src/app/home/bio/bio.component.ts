import { Component, OnInit, OnDestroy } from '@angular/core';
import { I18nService } from '@app/core';

import * as Multiple from 'multiple.js';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit, OnDestroy {
  fullname = 'Volodia PAROL-GUARINO';
  location = 'Rennes';
  citizenship = 'French';
  private _birth = new Date(1999, 2, 22);

  private multiple: any;

  constructor(private i18n: I18nService) {}

  ngOnInit() {
    this.multiple = new Multiple({
      selector: '.text-shared-hue-background, .btn-hue',
      background: 'linear-gradient(117deg, rgba(131,58,180,1) 23%, rgba(253,29,29,1) 47%, rgba(252,176,69,1) 100%)'
    });
  }

  ngOnDestroy() {
    if (this.multiple) this.multiple.destroy();
  }

  get birth() {
    return this._birth.toLocaleString(this.i18n.language).split(',')[0];
  }
}
