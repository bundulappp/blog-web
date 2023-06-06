import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  itemList = [
    {
      id: 1,
      author: {
        id: 1,
        name: 'The Secret Developer',
        picSrc: '/assets/photo/pexels-pixabay-220453.jpg',
      },
      date: 'June 12',
      title: 'Angular vs. React vs. Vue: A 2017 comparison',
      body: ` Deciding on a JavaScript framework for your web application can be
    overwhelming. Angular and React are very popular these days, and there
    is an upstart which has been getting a lot of traction lately: VueJS.`,
      itemPicSrc: '/assets/photo/pexels-antonio-batinić-4164418.jpg',
      about: {
        topic: 'Angular',
        minToRead: 5,
      },
    },
    {
      id: 2,
      author: {
        id: 1,
        name: 'The Secret Developer',
        picSrc: '/assets/photo/pexels-pixabay-220453.jpg',
      },
      date: 'June 12',
      title: 'Angular vs. React vs. Vue: A 2017 comparison',
      body: ` Deciding on a JavaScript framework for your web application can be
    overwhelming. Angular and React are very popular these days, and there
    is an upstart which has been getting a lot of traction lately: VueJS.`,
      itemPicSrc: '/assets/photo/pexels-antonio-batinić-4164418.jpg',
      about: {
        topic: 'Angular',
        minToRead: 5,
      },
    },
    {
      id: 3,
      author: {
        id: 3,
        name: 'The Secret Developer',
        picSrc: '/assets/photo/pexels-pixabay-220453.jpg',
      },
      date: 'June 12',
      title: 'Angular vs. React vs. Vue: A 2017 comparison',
      body: ` Deciding on a JavaScript framework for your web application can be
    overwhelming. Angular and React are very popular these days, and there
    is an upstart which has been getting a lot of traction lately: VueJS.`,
      itemPicSrc: '/assets/photo/pexels-antonio-batinić-4164418.jpg',
      about: {
        topic: 'Angular',
        minToRead: 5,
      },
    },
    {
      id: 4,
      author: {
        id: 4,
        name: 'The Secret Developer',
        picSrc: '/assets/photo/pexels-pixabay-220453.jpg',
      },
      date: 'June 12',
      title: 'Angular vs. React vs. Vue: A 2017 comparison',
      body: ` Deciding on a JavaScript framework for your web application can be
    overwhelming. Angular and React are very popular these days, and there
    is an upstart which has been getting a lot of traction lately: VueJS.`,
      itemPicSrc: '/assets/photo/pexels-antonio-batinić-4164418.jpg',
      about: {
        topic: 'Angular',
        minToRead: 5,
      },
    },
  ];

  constructor(private router: Router) {}

  navigateToBlogById(id: number): void {
    this.router.navigate([`main/${id}`]);
  }
}
