import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditschemaComponent } from './editschema.component';

describe('EditschemaComponent', () => {
  let component: EditschemaComponent;
  let fixture: ComponentFixture<EditschemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditschemaComponent]
    });
    fixture = TestBed.createComponent(EditschemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
