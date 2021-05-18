import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() innerWidth;
  screenSubs : Subscription;

  logoSrc = 'https://www.logo.wine/a/logo/Amazon_Prime/Amazon_Prime-Logo.wine.svg';
  menu = [
    {id : 'home', url : '#'},
    {id : 'tv shows', url : '#'},
    {id : 'movies', url : '#'},
    {id : "kid's section", url : '#'}
  ];
  menuFlag: boolean;
  profileFlag : boolean;

  constructor() { }

  ngOnInit(): void {
    this.screenSubs = this.innerWidth.subscribe((width:any) => {
      if (width < 600) {
        this.menuFlag = false;
      } else {
        this.menuFlag = true;
      }
    })
  }

  ngOnDestroy() {
    this.screenSubs.unsubscribe();
  }

}
