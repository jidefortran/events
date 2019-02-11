import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBarComponent } from './update-bar.component';

describe('UpdateBarComponent', () => {
  let component: UpdateBarComponent;
  let fixture: ComponentFixture<UpdateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
