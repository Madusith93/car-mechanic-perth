export type ServicePageBlockType = 'h2' | 'h3' | 'p' | 'list' | 'faq';

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServicePageBlock {
  type: ServicePageBlockType;
  text?: string;
  items?: string[] | FaqItem[];
}

export interface ServicePageData {
  slug: string;
  pageTitle: string;
  h1: string;
  lead: string;
  icon: string;
  blocks: ServicePageBlock[];
}