import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBillDetailComponent } from './edit-bill-detail.component';

describe('EditBillDetailComponent', () => {
  let component: EditBillDetailComponent;
  let fixture: ComponentFixture<EditBillDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBillDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBillDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
