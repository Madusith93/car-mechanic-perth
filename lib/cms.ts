/**
 * Client for the PHP/JSON CMS backend in /cms.
 * fetchContent() pulls every section in one request; components consume it
 * via the CmsProvider context (see context/CmsContext.tsx) and fall back to
 * their own hardcoded defaults if this fails or hasn't loaded yet.
 */

export interface SiteContent {
  business_name: string;
  phone_display: string;
  phone_tel: string;
  email: string;
  address: string;
  google_maps_url: string;
  map_embed_url: string;
  hours: { weekdays: string; saturday: string; sunday: string };
  tagline: string;
}

export interface HeroContent {
  location_badge: string;
  heading_line1: string;
  heading_highlight: string;
  description: string;
  cta_text: string;
  background_image: string;
  features: string[];
}

export interface TitledItem {
  title: string;
  desc: string;
}

export interface ServicesContent {
  badge: string;
  heading_line1: string;
  heading_highlight: string;
  image: string;
  items: TitledItem[];
}

export interface ServicePageItem {
  title: string;
  description: string;
  whatsIncluded: string[];
  signs: string;
  closing: string;
}

export interface ServicesPageContent {
  badge: string;
  heading_line1: string;
  heading_highlight: string;
  description: string;
  cta_heading: string;
  cta_description: string;
  cta_button_text: string;
  items: ServicePageItem[];
}

export interface WhyUsContent extends ServicesContent {
  cta_text: string;
}

export interface AreasContent {
  badge: string;
  heading_line1: string;
  heading_highlight: string;
  description: string;
  suburbs: string[];
}

export interface ReviewItem {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface ReviewsContent {
  badge: string;
  heading_line1: string;
  heading_highlight: string;
  description: string;
  items: ReviewItem[];
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterContent {
  tagline: string;
  services: FooterLink[];
  copyright_suffix: string;
}

export interface BookingContent {
  services: string[];
}

export interface CmsContent {
  site: SiteContent;
  hero: HeroContent;
  services: ServicesContent;
  servicesPage: ServicesPageContent;
  whyUs: WhyUsContent;
  areas: AreasContent;
  reviews: ReviewsContent;
  footer: FooterContent;
  booking: BookingContent;
}

const CMS_BASE = process.env.NEXT_PUBLIC_CMS_API_URL || "/cms/api";

export async function fetchContent(): Promise<CmsContent | null> {
  try {
    const res = await fetch(`${CMS_BASE}/content.php`, {
      cache: "no-store",
      credentials: "omit",
    });
    if (!res.ok) return null;
    return (await res.json()) as CmsContent;
  } catch {
    return null;
  }
}

export interface BookingSubmission {
  fullName: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  preferredDate: string;
  issue: string;
}

export async function submitBooking(
  data: BookingSubmission
): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch(`${CMS_BASE}/booking.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const body = await res.json();
    if (!res.ok) {
      return { success: false, error: body.error || "Something went wrong." };
    }
    return { success: true };
  } catch {
    return { success: false, error: "Could not reach the server. Please call us instead." };
  }
}
