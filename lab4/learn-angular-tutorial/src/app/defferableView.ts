import { Component } from '@angular/core';
import { Comments } from './comments/comments';

@Component({
  selector: 'app-root',
  imports: [Comments],
  template: `
    <div>
      <h1>How I feel about Angular</h1>

      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly be.
          The Angular community is also filled with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and takes
          care to make us very happy.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly be.
          The Angular community is also filled with amazing contributors and experts that create excellent
          content. The community is welcoming and friendly, and it really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had.
        </p>
      </article>

      @defer (on viewport) {
        <comments />
      } @placeholder {
        <p>Future comments</p>
      } @loading (minimum 2s) {
        <p>Loading comments...</p>
      }
    </div>
  `,
})
export class App {}