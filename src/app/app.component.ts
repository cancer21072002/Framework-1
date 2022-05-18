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
      name: 'Ahri',
      dame: 400,
      defend: 200,
      speed: 100,
      price: 6300,
      avatar: 'https://kenhsongao.com/uploads/2021/05/photo-1-16154710895551258162210.jpg'
    }
  ];
   studentName = 'vandth';
  studentId = 'PH13979';

  // Sự kiện
  // Biến lưu trạng thái hiển thị bảng
  showStatus = true;
  onClickBtn() {
    console.log("Btn clicked!");
    this.showStatus = !this.showStatus;
  }
  inputValue={
    name:'',
    avatar:'',
    dame:'',
    price:''
  }
  onInput(event:any, key:'name'|'avatar'|'dame'|'price'){
    this.inputValue[key]=event.target.value;
  }

  // inputName='';
  // onInputName(event:any){
  //   this.inputName= event.target.value;
  // }
  // inputAvatar='';
  // onInputAvatar(event:any){
  //   this.inputAvatar=event.target.value;
  // }
  onSubmit(){
    console.log('Gia tri cac o Input',this.inputValue);
  this.champs.push({}...this.inputValue,
    dame:+this.inputValue.dame,
    price:+this.inputValue.price
    )
  };
  this.inputValue={
    name:'',
    avatar:'',
    dame:'',
    price:'',

  };
}


