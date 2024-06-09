import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateListItemComponent } from './rate-list-item.component';

describe('RateListItemComponent', () => {
  let component: RateListItemComponent;
  let fixture: ComponentFixture<RateListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
