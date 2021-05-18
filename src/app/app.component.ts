import { Component, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public innerWidth: any;
  public $innerWidth;

  ngOnInit() {
    this.$innerWidth = new BehaviorSubject(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.innerWidth = window.innerWidth;
  this.$innerWidth.next(this.innerWidth);
}

}
