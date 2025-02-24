import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAnimationComponent } from './title-animation.component';

describe('TitleAnimationComponent', () => {
  let component: TitleAnimationComponent;
  let fixture: ComponentFixture<TitleAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
