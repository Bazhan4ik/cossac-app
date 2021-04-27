import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor() { }

  cards = [
    {
      title: "hello",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, itaque adipisci? Veritatis, aliquam? Obcaecati vel pariatur earum ipsa, provident, consequatur sequi quia cupiditate, vitae architecto dolor voluptas placeat quod laudantium."
    },{
      title: "hello",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, itaque adipisci? Veritatis, aliquam? Obcaecati vel pariatur earum ipsa, provident, consequatur sequi quia cupiditate, vitae architecto dolor voluptas placeat quod laudantium."
    },{
      title: "hello",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, itaque adipisci? Veritatis, aliquam? Obcaecati vel pariatur earum ipsa, provident, consequatur sequi quia cupiditate, vitae architecto dolor voluptas placeat quod laudantium."
    },{
      title: "hello",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, itaque adipisci? Veritatis, aliquam? Obcaecati vel pariatur earum ipsa, provident, consequatur sequi quia cupiditate, vitae architecto dolor voluptas placeat quod laudantium."
    }
  ]

  ngOnInit() {
  }

}
