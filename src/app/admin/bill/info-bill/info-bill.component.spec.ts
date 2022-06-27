import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBillComponent } from './info-bill.component';

describe('InfoBillComponent', () => {
  let component: InfoBillComponent;
  let fixture: ComponentFixture<InfoBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
