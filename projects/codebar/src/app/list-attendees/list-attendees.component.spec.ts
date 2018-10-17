import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAttendeesComponent } from './list-attendees.component';

describe('ListAttendeesComponent', () => {
  let component: ListAttendeesComponent;
  let fixture: ComponentFixture<ListAttendeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAttendeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
