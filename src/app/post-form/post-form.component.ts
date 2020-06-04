import {Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {AppComponent, Post} from '../app.component';



@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() added = new EventEmitter<boolean>();
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();


  @ViewChild('titleInput', {static: false}) inputRef: ElementRef;


  title = '';
  text = '';
  price = '';
  a = 0;
  add = false;
  remove = false;

  constructor() {
  }

  ngOnInit(): void {

  }


  addPost() {
    if (this.text.trim() && this.title.trim() && this.price ) {
      this.a++;
      const post: Post = {
        title: this.title,
        text: this.text,
        price: this.price,
        id: this.a
      };

      this.onAdd.emit(post);

      this.add = true;
      this.added.emit(this.add);
      this.title = this.text = this.price =  '';

    }


  }
}

