/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageFourComponent } from './page-four.component';

describe('PageFourComponent', () => {
  let component: PageFourComponent;
  let fixture: ComponentFixture<PageFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
