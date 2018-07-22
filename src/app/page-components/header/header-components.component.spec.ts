import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { headerComponentsComponent } from './header-components.component';

describe('headerComponentsComponent', () => {
  let component: headerComponentsComponent;
  let fixture: ComponentFixture<headerComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ headerComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(headerComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
