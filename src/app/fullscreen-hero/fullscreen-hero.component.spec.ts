import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenHeroComponent } from './fullscreen-hero.component';

describe('FullscreenHeroComponent', () => {
  let component: FullscreenHeroComponent;
  let fixture: ComponentFixture<FullscreenHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullscreenHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
