import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBillDetailComponent } from './create-bill-detail.component';

describe('CreateBillDetailComponent', () => {
  let component: CreateBillDetailComponent;
  let fixture: ComponentFixture<CreateBillDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBillDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBillDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
