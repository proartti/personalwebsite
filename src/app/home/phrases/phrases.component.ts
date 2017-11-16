import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.scss']
})
export class PhrasesComponent implements OnInit {

  phrases: Phrase[] = [
    {
      text: 'Bacon is life',
      author: 'unkown'
    },
    {
      text: 'My inspiration is in put some criativity in all my projects.',
      author: 'Tiago Donatti'
    }
  ];

  currentPhrase = <Phrase>{};

  constructor() { }

  ngOnInit() {

  }

}

export interface Phrase {
  text: string;
  author: string;
}
