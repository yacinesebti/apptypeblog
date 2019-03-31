import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit
{
    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() postLoveIts: number;
    @Input() postCreated_at: Date;
    @Input() posts;


  constructor() { }

  ngOnInit() {  }





}
