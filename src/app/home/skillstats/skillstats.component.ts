import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SkillsetComponent } from './skillset.component';
import { DEVELOPMENT } from '../../_data/skillstats';
import { SkillStats } from '../../_models/home.model';


@Component({
  selector: 'app-skillstats',
  templateUrl: './skillstats.component.html',
  styleUrls: ['./skillstats.component.scss']
})
export class SkillstatsComponent implements OnInit {

  developmentStats: SkillStats[] = DEVELOPMENT;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  setSkillStat(stats: number) {

    let statsHtml = '';

    for (let i = 0; i < 5; i++) {
      statsHtml += `
        <span class="gold-star">
          <svg viewBox="0 0 74 70">
            <path d="M425,292l12.33,21.81L462,318.74l-17,18.41L447.87,362,425,351.56,402.13,362,405,337.14l-17-18.41,24.67-4.93Z"
              transform="translate(-388 -292)"/>
          </svg>
        </span>`;
    }

    return this.sanitizer.bypassSecurityTrustHtml(statsHtml);
  }

}
