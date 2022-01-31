import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  animeList: ContentList;
  animeOne: Content;
  animeTwo: Content;
  animeThree: Content;
  constructor() { 
    this.animeOne = {
      id: 1,
      title: "Death Note",
      description: "Death Note is a Japanese managa series written by Tsugumi Ohba. the story follows Light Yagami, a teen genius who discovers a mysterious notebook: the 'Death Note', which belonged to the Shinigami Ryku, and grants the user the supernatural ability to kill anyone whose name is written in its pages.",
      creator: "Madhouse",
      imgURL: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      type: "Mystery, Supernatural, Suspense"
    }

    this.animeTwo = {
      id: 2,
      title: "One Punch Man",
      description: "One-Punch Man is a Japanese superhero franchise created by the artist ONE. It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge due to his overwhelming strength. ONE wrote the original webcomic version in early 2009.",
      creator: "Madhouse",
      imgURL: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
      type: "Action, Comedy, Sci-Fi, Supernatural"
    }

    this.animeThree = {
      id: 3,
      title: "Inuyasha",
      description: "Inuyasha is a Japanese manga series written by Rumiko Takahashi. the series begins with Kagome Higurashi, a fifteen-year-old middle school girl from modern-day Tokoyo who is transported to the Sengoku period after falling into a well in her family shrine, where she meets the half-dog demon, half-human Inuyasha. After the savred Shikon Jewel re-emerges from deep inside Kagome's body, she accidentally shatters it into dozens of fragments that scatter across Japan. Inutasha and Kagome set to recover the Jewel's gragments, and through their quest they are joined by the Iecherous monk Miroku, the demon slayer Sango, and the fox demon Shippo. Together, they journey to restore the Shikon Jewel before it falls into the hands of the evil half-demon Naraku.",
      creator: "Sunrise",
      imgURL: "https://cdn.myanimelist.net/images/anime/1589/95329.jpg",
      type: "Demons, Historical"
    }

    this.animeList = new ContentList(this.animeOne);
    this.animeList.addContent(this.animeTwo);
    this.animeList.addContent(this.animeThree);
  }

  ngOnInit(): void {
  }

}
