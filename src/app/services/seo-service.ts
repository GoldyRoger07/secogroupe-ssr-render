import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  /** Full page title (already includes the brand suffix if wanted). */
  title: string;
  description: string;
  /** Absolute path starting with a slash, e.g. '/about-us'. */
  path: string;
  /** Absolute or root-relative image used for social sharing. */
  image?: string;
}

const SITE_URL = 'https://secogroupe.com';
const DEFAULT_IMAGE = `${SITE_URL}/img/apply_now_flyer.jpeg`;
const SITE_NAME = 'SECO Groupe';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);

  /** Sets title, meta description, canonical link and social tags for a page. */
  update(data: SeoData): void {
    const url = `${SITE_URL}${data.path}`;
    const image = this.toAbsolute(data.image ?? DEFAULT_IMAGE);

    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });

    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(url);
  }

  private toAbsolute(image: string): string {
    if (image.startsWith('http')) return image;
    return `${SITE_URL}/${image.replace(/^\//, '')}`;
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
