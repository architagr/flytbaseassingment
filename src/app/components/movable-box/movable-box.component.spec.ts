import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovableBoxComponent } from './movable-box.component';

describe('MovableBoxComponent', () => {
  let component: MovableBoxComponent;
  let fixture: ComponentFixture<MovableBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovableBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovableBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
