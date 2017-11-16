import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent implements OnInit {

  @Input() stat: number;

  numbersStars: any;
  starsClass: any[] = [];
  showStars = false;

  constructor() {
    this.numbersStars = Array(5).fill(0).map(
      (x, i) => i
    );
  }

  ngOnInit() {
    this.setStarClass();
  }

  setStarClass() {
    const starsNumber = Number(this.stat / 2);

    for (const number of this.numbersStars) {

      const starPosition = number + 1;

      if (starPosition <= starsNumber) {
        this.starsClass.push('gold-star');
        continue;
      }
      if (this.stat % 2 !== 0 && Math.ceil(starsNumber) === starPosition) {
        this.starsClass.push('half-star');
        continue;
      }
      this.starsClass.push('grey-star');
    }

    this.showStars = true;
  }
}
