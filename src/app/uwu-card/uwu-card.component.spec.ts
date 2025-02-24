import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UwuCardComponent } from './uwu-card.component';

describe('UwuCardComponent', () => {
  let component: UwuCardComponent;
  let fixture: ComponentFixture<UwuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UwuCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UwuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
