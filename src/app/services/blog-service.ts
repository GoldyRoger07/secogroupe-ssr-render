import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BlogPost, PageResponse } from '../models/BlogPost';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/blog`;

  /** Liste paginée des articles publiés. */
  getPosts(page = 0, size = 9, globalFilter = ''): Observable<PageResponse<BlogPost>> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sortOrder', 'desc');
    if (globalFilter) {
      params = params.set('globalFilter', globalFilter);
    }
    return this.http.get<PageResponse<BlogPost>>(this.baseUrl, { params });
  }

  /** Un article publié par son slug. */
  getPostBySlug(slug: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.baseUrl}/${encodeURIComponent(slug)}`);
  }
}
