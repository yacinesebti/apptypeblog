import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated_at: Date;

  constructor() { }

  onLove() {
    var nombre = this.postLoveIts++
    console.log('J\'aime : '+ nombre);
}

  onUnlove() {
    var nombre = this.postLoveIts--
    console.log('Je n\'aime pas !'+ this.postLoveIts);
}

  ngOnInit() {
  }

}
