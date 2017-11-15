import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillstatsComponent } from './skillstats.component';

describe('SkillstatsComponent', () => {
  let component: SkillstatsComponent;
  let fixture: ComponentFixture<SkillstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
