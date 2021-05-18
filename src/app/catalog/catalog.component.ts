import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit, OnDestroy {
  constructor() {}

  @ViewChild('myCarousel', {static: false}) myCarousel;
  @Input() heading;
  @Input() firstRail;
  @Input() innerWidth;
  screenSubs : Subscription;

  cellShow;
  theme = 'dark';
  images = [
    {path: 'https://bit.ly/3hBtdRg'},
    {path: 'https://bit.ly/3ft34kO'},
    {path: 'https://cosmicbook.news/sites/default/files/batman-robert-pattinson-promo-images-dc-fandome.jpg'},
    {path: 'https://otakukart.com/wp-content/uploads/2021/03/Poster-55.jpg'},
    {path: 'https://bit.ly/3fjIG5O'},
    {path: 'https://bit.ly/3eRZhhV'}
  ];

  ngOnInit(): void {
    this.screenSubs = this.innerWidth.subscribe((width:any) => {
      if (width < 600) {
        this.cellShow = 2.75;
      } else {
        this.cellShow = 4.15;
      }
    })
  }

  ngAfterViewInit() {
    var slider = document.getElementsByClassName('carousel-arrow-next')[2] as HTMLElement;
    slider.click();
    setTimeout(() => {
      slider.click();
    }, 900);
  }

  ngOnDestroy() {
    this.screenSubs.unsubscribe();
  }

}
