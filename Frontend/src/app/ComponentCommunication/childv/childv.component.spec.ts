import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildvComponent } from './childv.component';

describe('ChildvComponent', () => {
  let component: ChildvComponent;
  let fixture: ComponentFixture<ChildvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
