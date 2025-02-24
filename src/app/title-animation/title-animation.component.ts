import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, interval, switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-title-animation',
  imports: [],
  templateUrl: './title-animation.component.html',
  styleUrl: './title-animation.component.scss',
})
export class TitleAnimationComponent {
  private readonly animationPeriod_ms: number = 3000;
  private readonly animationFPS: number = 3;
  private readonly title = 'uwusome';

  constructor() {
    interval(this.animationPeriod_ms)
      .pipe(
        switchMap(() => interval(1000 / this.animationFPS)),
        filter((i) => this.title.length >= i),
        takeUntilDestroyed()
      )
      .subscribe((frameIndex) => {
        if (frameIndex >= this.title.length) {
          document.title = this.title;
          return;
        }

        const title =
          this.title.slice(0, frameIndex) +
          this.title[frameIndex].toUpperCase() +
          this.title.slice(frameIndex + 1);
        document.title = title;
      });
  }
}
