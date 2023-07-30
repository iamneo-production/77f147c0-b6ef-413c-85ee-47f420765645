import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InsurenceStatusComponent } from './insurencestatus.component';

describe('InsurenceStatusComponent', () => {
  let component: InsurenceStatusComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [InsurenceStatusComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(InsurenceStatusComponent);
    component = fixture.componentInstance;
  });
  it('FE_insurenceStatusTest', () => {
    expect(component).toBeTruthy();
  });
});