import { Component } from '@angular/core';

@Component({
  selector: 'app-section33',
  templateUrl: './section33.component.html',
  styleUrls: ['./section33.component.css']
})
export class Section33Component {
  ngOnInit(){ }
  url : string ="../../assets/phone.jpg";
  url2 : string ="../../assets/fri.jpg";
  url3: string="../../assets/tv.jpg";
  url4: string="../../assets/phone.jpg";


  changeImage(event:any){
    this.url = event.target.src;

  }
    changeImage2(event:any){
      this.url2 = event.target.src;

  }
  changeImage3(event:any){
    this.url3 = event.target.src;

}
changeImage4(event:any){
  this.url4 = event.target.src;

}
}
