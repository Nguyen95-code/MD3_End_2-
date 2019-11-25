import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAwesomeComponent } from './delete-awesome.component';

describe('DeleteAwesomeComponent', () => {
  let component: DeleteAwesomeComponent;
  let fixture: ComponentFixture<DeleteAwesomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAwesomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
