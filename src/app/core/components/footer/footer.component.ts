import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class FooterComponent {

  socialData = [
    {url: 'https://twitter.com/ErasmusRandall', name: 'Twitter', img: './assets/svg/twitter.svg'},
    {url: 'https://github.com/randallerasmus', name: 'Github', img: './assets/svg/github.svg'}
  ];

  constructor() { }
}
