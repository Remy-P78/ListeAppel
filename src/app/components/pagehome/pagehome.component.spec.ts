import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagehomeComponent } from './pagehome.component';

describe('PagehomeComponent', () => {
  let component: PagehomeComponent;
  let fixture: ComponentFixture<PagehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagehomeComponent]
    });
    fixture = TestBed.createComponent(PagehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});