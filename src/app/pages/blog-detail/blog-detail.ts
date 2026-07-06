import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { BlogPost } from '../../models/BlogPost';
import { BlogService } from '../../services/blog-service';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, RouterLink, Navbar, Footer],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
})
export default class BlogDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private blogService = inject(BlogService);
  private seo = inject(SeoService);
  private sanitizer = inject(DomSanitizer);

  post = signal<BlogPost | null>(null);
  /**
   * Contenu HTML issu de l'éditeur Quill (rédigé par un admin authentifié).
   * bypassSecurityTrustHtml préserve les attributs Quill (data-list, classes
   * ql-align/ql-indent) que le sanitizer Angular retirerait sinon.
   */
  safeContent = signal<SafeHtml | null>(null);
  isLoading = signal(true);
  notFound = signal(false);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        this.load(slug);
      }
    });
  }

  private load(slug: string): void {
    this.isLoading.set(true);
    this.notFound.set(false);

    this.blogService.getPostBySlug(slug).subscribe({
      next: (post) => {
        this.post.set(post);
        this.safeContent.set(
          post.content ? this.sanitizer.bypassSecurityTrustHtml(post.content) : null,
        );
        this.isLoading.set(false);
        this.seo.update({
          title: `${post.title} | SECO Groupe`,
          description: post.excerpt ?? post.title,
          path: `/blog/${post.slug}`,
          image: post.coverImage ?? undefined,
        });
      },
      error: () => {
        this.isLoading.set(false);
        this.notFound.set(true);
      },
    });
  }

  goToBlog(): void {
    this.router.navigate(['/blog']);
  }
}
