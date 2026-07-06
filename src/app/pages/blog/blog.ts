
import { Navbar } from "../../components/navbar/navbar";
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { BlogPost } from '../../models/BlogPost';
import { BlogService } from '../../services/blog-service';
import { SeoService } from '../../services/seo-service';
import { CommonModule } from "@angular/common";
import { from } from "rxjs";

@Component({
  selector: 'app-blog',
  imports: [CommonModule, RouterLink, Navbar, Footer],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export default class Blog implements OnInit {
  private blogService = inject(BlogService);
  private seo = inject(SeoService);

  posts = signal<BlogPost[]>([]);
  isLoading = signal(true);
  hasError = signal(false);

  ngOnInit(): void {
    this.seo.update({
      title: 'Blog | SECO Groupe',
      description:
        'News, insights and tips from SECO Groupe on facility management, security, staffing and hospitality services.',
      path: '/blog',
    });

    this.load();
  }

  private load(): void {
    this.isLoading.set(true);
    this.hasError.set(false);

    this.blogService.getPosts(0, 12).subscribe({
      next: (res) => {
        this.posts.set(res.content ?? []);
        this.isLoading.set(false);
      },
      error: () => {
        this.hasError.set(true);
        this.isLoading.set(false);
      },
    });
  }

  retry(): void {
    this.load();
  }
}
