import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent implements OnInit {

  @Input() stat: number;

  numbersStars: any;

  constructor() {
    this.numbersStars = Array(5).fill(0).map(
      (x, i) => i
    );
  }

  ngOnInit() {
    console.log('stat', this.stat);
    console.log('this.numbersStars', this.numbersStars);

  }

  setStarClass(index: number) {

    const starPosition = index + 1;
    const starsNumber = Number(this.stat / 2);

    console.log('starsNumber', starsNumber, Math.floor(starsNumber), starPosition);

    if (starPosition <= starsNumber) {
      return 'gold-star';
    }
    if (this.stat % 2 !== 0 && Math.ceil(starsNumber) === starPosition) {
      return 'half-star';
    }
    return 'grey-star';
  }

}
