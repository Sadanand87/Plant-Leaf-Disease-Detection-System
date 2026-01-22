import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsesComponent } from './view-uses.component';

describe('ViewUsesComponent', () => {
  let component: ViewUsesComponent;
  let fixture: ComponentFixture<ViewUsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUsesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
