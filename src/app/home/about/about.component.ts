import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('showShip', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hideShip',   style({
        opacity: 0,
        transform: 'translateY(50%)'
      })),
      transition('showShip <=> hideShip', animate('1200ms ease-out'))
    ])
  ]

})
export class AboutComponent implements OnInit {

  state = 'hideShip';

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
  }


  @HostListener('window:scroll', ['$event'])

  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.state = 'showShip';
    } else {
      this.state = 'hideShip';
    }
  }

}
