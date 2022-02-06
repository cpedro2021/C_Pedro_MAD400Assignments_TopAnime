import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() content?: Content;

  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.content);
  }

  public imageClicked(){
    console.log("Anime ID: " + this.content?.id + ", Anime Title: " + this.content?.title)
  }

}
