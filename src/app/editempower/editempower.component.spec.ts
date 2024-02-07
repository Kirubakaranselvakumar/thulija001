import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditempowerComponent } from './editempower.component';

describe('EditempowerComponent', () => {
  let component: EditempowerComponent;
  let fixture: ComponentFixture<EditempowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditempowerComponent]
    });
    fixture = TestBed.createComponent(EditempowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
