import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressElementComponent } from './progress-element.component';

describe('ProgresElementComponent', () => {
  let component: ProgressElementComponent;
  let fixture: ComponentFixture<ProgressElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressElementComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
