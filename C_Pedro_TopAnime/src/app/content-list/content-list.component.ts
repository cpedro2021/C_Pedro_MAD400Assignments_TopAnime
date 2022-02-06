import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  anime: Content[];

  constructor() { 
    this.anime = [{
      id: 0,
      title: "Fullmetal Alchemist: Botherhood",
      description: `After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical 
      principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body 
      disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.
      The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for 
      Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their 
      bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.
      As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.`,
      imgURL: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
      creator: "Bones",
      type: "Action, Adventure, Comedy, Drama, Fantasy",
    }, {
      id: 1,
      title: "Hunter x Hunter",
      description:`Hunter x Hunter is set in a world where Hunters exist to perform all manner of dangerous tasks like capturing criminals and bravely searching for lost treasures in 
      uncharted territories. Twelve-year-old Gon Freecss is determined to become the best Hunter possible in hopes of finding his father, who was a Hunter himself and had long ago 
      abandoned his young son. However, Gon soon realizes the path to achieving his goals is far more challenging than he could have ever imagined. 
      Along the way to becoming an official Hunter, Gon befriends the lively doctor-in-training Leorio, vengeful Kurapika, and rebellious ex-assassin Killua. To attain their own 
      goals and desires, together the four of them take the Hunter Exam, notorious for its low success rate and high probability of death. Throughout their journey, Gon and his 
      friends embark on an adventure that puts them through many hardships and struggles. They will meet a plethora of monsters, creatures, and characters—all while learning what 
      being a Hunter truly means.`,
      imgURL: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
      creator: "Madhouse",
      type: "Action, Adventure, Fantasy",
    }, {
      id: 2,
      title: "A Silent Voice",
      description:`As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, 
      Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her.
       With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while 
       teachers turn a blind eye. 
      Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of 
      redemption: to meet Shouko once more and make amends.
      Koe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows 
      of his past.`,
      imgURL: "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
      creator: "Kyoto Animation",
      type: "Drama",
    }, {
      id: 3,
      title: "Your Name.",
      description:`Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life 
      in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.
      One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living 
      Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.
      Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate 
      and circumstance.`,
      imgURL: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
      creator: "CoMix Wave Films",
      type: "Drama, Romance, Supernatural",
    }, {
      id: 4,
      title: "Jujustsu Kaisen",
      description:`Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, 
      where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering 
      a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing
       the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the "King of Curses."
      Yuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Metropolitan Jujutsu 
      Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.`,
      imgURL: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
      creator: "MAPPA",
      type: "Action, Supernatural",
    }, {
      id: 5,
      title: "Death Note",
      description:`Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. 
      The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.
      For his own amusement, Ryuk drops his "Death Note" into the human world. Light stumbles upon it, deeming the first of its rules ridiculous: the human whose name is 
      written in this note shall die. However, the temptation is too great, and Light experiments by writing a felon's name, which disturbingly enacts his first murder.
      Aware of the terrifying godlike power that has fallen into his hands, Light—under the alias "Kira"—follows his wicked sense of justice with the ultimate goal of 
      cleansing the world of all evil-doers. The meticulous mastermind detective L is already on his trail, but as Light's brilliance rivals L's, the grand chase for Kira 
      turns into an intense battle of wits that can only end when one of them is dead.`,
      imgURL: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      creator: " Madhouse",
      type: "Mystery, Supernatural, Suspense",
    }];

  }

  ngOnInit(): void {
  }

}
