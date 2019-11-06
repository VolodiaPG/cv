import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { I18nService } from '@app/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuHidden = true;
  sticky = false;

  /**
   * Get the element object
   */
  @ViewChild('navbarContainer', { static: false })
  private _navbarContainer: ElementRef;

  constructor(private _router: Router, private _i18nService: I18nService) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this._i18nService.language = language;
  }

  get currentLanguage(): string {
    return this._i18nService.language;
  }

  get languages(): string[] {
    return this._i18nService.supportedLanguages;
  }

  @HostListener('window:scroll', ['$event'])
  private onWindowScroll(e: Event) {
    this.sticky = window.pageYOffset > this._navbarContainer.nativeElement.offsetTop;
  }
}
