import { Component, OnInit } from '@angular/core';
import { SkillsetComponent } from './skillset.component';
import { DEVELOPMENT, TOOLING, PERSONAL } from '../../_data/skillstats';
import { SkillStats } from '../../_models/home.model';


@Component({
  selector: 'app-skillstats',
  templateUrl: './skillstats.component.html',
  styleUrls: ['./skillstats.component.scss']
})
export class SkillstatsComponent implements OnInit {

  developmentStats: SkillStats[] = DEVELOPMENT;
  toolingStats: SkillStats[] = TOOLING;
  personalStats: SkillStats[] = PERSONAL;

  constructor() {}

  ngOnInit() {}

}
