import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HHttpComponent } from './h-http.component';

describe('HHttpComponent', () => {
  let component: HHttpComponent;
  let fixture: ComponentFixture<HHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
