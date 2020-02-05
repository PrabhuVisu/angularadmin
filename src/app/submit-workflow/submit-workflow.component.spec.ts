import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitWorkflowComponent } from './submit-workflow.component';

describe('SubmitWorkflowComponent', () => {
  let component: SubmitWorkflowComponent;
  let fixture: ComponentFixture<SubmitWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
