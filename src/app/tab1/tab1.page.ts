import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  template: `
    <ion-slides pager="true" scrollbar="true" [options]="slideOpts">
      <ion-slide>
      <ion-img [src]="Slide1.png"></ion-img>
        <h1>Poznaj historię Polski od Piastów do współczesności</h1>
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




