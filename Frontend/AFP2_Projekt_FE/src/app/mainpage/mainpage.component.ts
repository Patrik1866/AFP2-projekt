import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent implements OnInit{

  posts: Post[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
    const user = localStorage.getItem('user');
    if (!user) {
      this.router.navigate(['/login']);
    }
    else{
      console.log(user);
    }
  }

  loadPosts(): void {
    // Here you would typically make a HTTP request to your backend to fetch the posts
    // For simplicity, we'll just use some dummy data
    this.posts = [
      { title: 'Post 1', content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.', date: new Date('2022-01-01') },
      { title: 'Post 2', content: 'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.', date: new Date('2022-01-02') },
      { title: 'Post 3', content: 'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary.', date: new Date('2022-01-03') },
      { title: 'Post 4', content: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.', date: new Date('2022-01-04') },
      { title: 'Post 5', content: 'The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.', date: new Date('2022-01-05') },
      { title: 'Post 6', content: 'What happened to me? he thought. It wasnt a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.', date: new Date('2022-01-06') },
      // Add more posts as needed
    ]
    ;
  }

}
