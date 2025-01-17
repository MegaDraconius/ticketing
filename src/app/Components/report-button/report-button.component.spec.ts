import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportButtonComponent } from './report-button.component';

describe('ReportButtonComponent', () => {
  let component: ReportButtonComponent;
  let fixture: ComponentFixture<ReportButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
