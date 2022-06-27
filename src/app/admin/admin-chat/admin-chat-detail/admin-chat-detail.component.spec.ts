import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChatDetailComponent } from './admin-chat-detail.component';

describe('AdminChatDetailComponent', () => {
  let component: AdminChatDetailComponent;
  let fixture: ComponentFixture<AdminChatDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChatDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
