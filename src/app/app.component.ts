import { Component } from '@angular/core';

export interface Post{
  title: string;
  text: string;
  price: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rem = false;
  added = false;
public posts: Post[] = [
 ];

 updatePosts(post: Post){

   this.posts.unshift(post);
   console.log(this.posts);
 }

remove(id: number){
   this.posts = this.posts.filter(p => p.id !== id);
}

red(remove: boolean)
{
  this.added = false;
  this.rem = remove;

  setTimeout(() => {
    this.rem = false;
  }, 3000);
}

add(add: boolean){
  this.added = add;
  setTimeout(() => {
    this.added = false;
  }, 3000);

}

}
