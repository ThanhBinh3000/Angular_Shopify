import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWarehouseComponent } from './info-warehouse.component';

describe('InfoWarehouseComponent', () => {
  let component: InfoWarehouseComponent;
  let fixture: ComponentFixture<InfoWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
