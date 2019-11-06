import { Component, OnInit, Input } from '@angular/core';
import { I18nService } from '@app/core/i18n.service';
import { LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.scss']
})
export class MainTitleComponent {
  @Input('title')
  title: String;

  @Input('subtitle')
  subtitle: String | undefined = undefined;

  /**
   * In order to force the update on the css property background-clip,
   * there is a need for a change inside the CSS code each time the text is changed,
   * for example when the language is updated
   */
  forceUpdateBgClip = true;

  private langChangeSubscription: Subscription;

  constructor(private i18nService: I18nService) {
    this.langChangeSubscription = this.i18nService.langChange$.subscribe((_: LangChangeEvent) => {
      this.forceUpdateBgClip = !this.forceUpdateBgClip;
    });
  }

  /**
   * Cleans up language change subscription.
   */
  destroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
