import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePagePage } from './single-page.page';

describe('SinglePagePage', () => {
  let component: SinglePagePage;
  let fixture: ComponentFixture<SinglePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
