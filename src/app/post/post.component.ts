import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
rem = false;
  @Input() post: Post;
  @Output() onRemove = new EventEmitter<number>();
  @Output() removed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  remove(){
    this.rem = true;
    this.onRemove.emit(this.post.id);
    this.removed.emit(this.rem);

    setTimeout(  () => {
  this.rem = false;
    }, 3000);
  }


  now = new Date();


}
