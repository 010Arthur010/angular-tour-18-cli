import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudulComponent } from './judul.component';

describe('JudulComponent', () => {
  let component: JudulComponent;
  let fixture: ComponentFixture<JudulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JudulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
