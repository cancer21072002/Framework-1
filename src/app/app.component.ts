import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';

  name = 'vandthph13979';
  class = 'we16301';
  students = [
    {
      name: 'vandthph13979',
      id: 'P1',
      status: 1
    },
    {
      name: 'vandthph13979',
      id: 'P2',
      status: 1
    },
    {
      name: 'vandthph13979',
      id: 'P3',
      status: 0
    }
  ];

  champs = [
    {
      name: 'Eᴢreal',
      dame: 500,
      price: 6500,
      avatar: 'https://camnang24h.net/wp-content/uploads/2019/04/hinh-nen-tuong-Ezreal-trong-lien-minh-huyen-thoai-6.jpg'
    },
    {
      name: 'Draᴠen',
      dame: 900,
      price: 2000,
      avatar: 'https://camnang24h.net/wp-content/uploads/2019/04/hinh-nen-tuong-Ezreal-trong-lien-minh-huyen-thoai-6.jpg'
    },
    {
      name: 'Eᴢreal',
      dame: 500,
      price: 10000,
      avatar: 'https://camnang24h.net/wp-content/uploads/2019/04/hinh-nen-tuong-Ezreal-trong-lien-minh-huyen-thoai-6.jpg'
    }

  ];
  studentName = 'Đỗ Thị Hồng Vân'
  studentMSV = 'ph13479'

  //
  showStatus = true;
  // sự kiện

  onClick() {
    this.showStatus = !this.showStatus

  }
  inputObj = {
    name: '',
    avatar: '',
    dame: '',
    price: ''
  }
  onInput(e: any, key: 'name' | 'avatar' | 'dame' | 'price') {
    this.inputObj[key] = e.target.value
  }
  onSubmit() {
    this.champs.push({
      ...this.inputObj,
      dame: +this.inputObj.dame,
      price: +this.inputObj.price
    })
  }
}
