import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  template: `
    <ion-slides pager="true" scrollbar="true" [options]="slideOpts">
      <ion-slide>
        <h1>Slide 1</h1>
      </ion-slide>
      <ion-slide>
        <h1>Slide 2</h1>
      </ion-slide>
      <ion-slide>
        <h1>Slide 3</h1>
      </ion-slide>
    </ion-slides>
  `
})
export class Tab1Page {
  slideOpts = {
    effect: 'flip'
  };
  constructor() {}
}




