import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

constructor() { }
@Input() innerWidth;

theme = 'dark';
bannerImages = [
  'https://images.picxy.com/cache/2020/9/22/0d2ae2fac707ef0ab4d4a5fff62f65a9.jpg',
  'https://www.mondovo.com/keywords/wp-content/uploads/2019/04/Avengers_End_Game_-_Most_Asked_Avengers_Questions.jpg',
  'https://www.mondovo.com/keywords/wp-content/uploads/2019/04/Avengers_End_Game_-_Most_Asked_Avengers_Questions.jpg',
  'https://www.mondovo.com/keywords/wp-content/uploads/2019/04/Avengers_End_Game_-_Most_Asked_Avengers_Questions.jpg'
];

bannerImgs = [
  {
    path : 'https://images.picxy.com/cache/2020/9/22/0d2ae2fac707ef0ab4d4a5fff62f65a9.jpg'
  },
  {
    path : 'https://www.mondovo.com/keywords/wp-content/uploads/2019/04/Avengers_End_Game_-_Most_Asked_Avengers_Questions.jpg'
  },
  {
    path : 'https://www.mondovo.com/keywords/wp-content/uploads/2019/04/Avengers_End_Game_-_Most_Asked_Avengers_Questions.jpg'
  },
  {
    path : 'https://www.mondovo.com/keywords/wp-content/uploads/2019/04/Avengers_End_Game_-_Most_Asked_Avengers_Questions.jpg'
  }
];

heading = {
  rail1 : 'Continue watching',
  rail2 : 'Explore movies'
}

ngOnInit(): void {

}

}
