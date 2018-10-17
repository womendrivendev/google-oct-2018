import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingsComponent } from './groupings.component';

describe('GroupingsComponent', () => {
  let component: GroupingsComponent;
  let fixture: ComponentFixture<GroupingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
