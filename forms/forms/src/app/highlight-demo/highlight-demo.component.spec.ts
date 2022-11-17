import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightDemoComponent } from './highlight-demo.component';

describe('HighlightDemoComponent', () => {
  let component: HighlightDemoComponent;
  let fixture: ComponentFixture<HighlightDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
