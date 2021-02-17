import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  showForm: boolean = false;

  myPosts: Post[] = [
    {
      title: "mardi",
      thought: "je voudrais un cafe s'il vous plait"
    },
    {
      title: "mercredi",
      thought: "j'aime la pizza"
    },
    {
      title: "jeudi",
      thought: "j'ai besoin de vin"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onDelete = (index: number): void => {
    this.myPosts.splice(index, 1);
  }

  onSubmit = (post: Post): void => {
    this.myPosts.push(post)
    // this.showForm = !this.showForm;
    this.toggleForm();
  }

  toggleForm = () => {
    this.showForm = !this.showForm;
  }

}
