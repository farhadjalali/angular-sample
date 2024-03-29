/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardElementComponent } from './card-element.component';

describe('CardElementComponent', () => {
  let component: CardElementComponent;
  let fixture: ComponentFixture<CardElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
