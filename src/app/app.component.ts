import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';

  students = [
    {
      name: 'ban A',
      id: 'PH1111',
      status: 0
    },
    {
      name: 'ban B',
      id: 'PH2222',
      status: 1
    },
    {
      name: 'Ban C',
      id: 'PH3333',
      status: 1
    }
  ];

  champs = [
    {
      name: 'Lucian',
      dame: 400,
      defend: 200,
      speed: 100,
      price: 6300,
      avatar: 'https://oneesports.blob.core.windows.net/cdn-data/sites/4/2021/08/pulsefire-lucian-lien-minh-huyen-thoai1.jpg'
    }
  ]
}
