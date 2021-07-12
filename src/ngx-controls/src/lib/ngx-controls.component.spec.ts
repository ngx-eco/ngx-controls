import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxControlsComponent } from './ngx-controls.component';

describe('NgxControlsComponent', () => {
  let component: NgxControlsComponent;
  let fixture: ComponentFixture<NgxControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
