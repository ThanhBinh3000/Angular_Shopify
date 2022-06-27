import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithBubbleChatComponent } from './layout-with-bubble-chat.component';

describe('LayoutWithBubbleChatComponent', () => {
  let component: LayoutWithBubbleChatComponent;
  let fixture: ComponentFixture<LayoutWithBubbleChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutWithBubbleChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWithBubbleChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
