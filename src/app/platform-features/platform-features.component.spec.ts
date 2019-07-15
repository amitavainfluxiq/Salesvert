import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformFeaturesComponent } from './platform-features.component';

describe('PlatformFeaturesComponent', () => {
  let component: PlatformFeaturesComponent;
  let fixture: ComponentFixture<PlatformFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
