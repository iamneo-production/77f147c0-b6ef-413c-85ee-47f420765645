import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackpageComponent } from './trackpage.component';

describe('TrackpageComponent', () => {
  let component: TrackpageComponent;
  let fixture: ComponentFixture<TrackpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
<<<<<<< HEAD
=======

>>>>>>> ebb333e999d828e21d25c95335a54083b64b415a
