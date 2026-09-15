export const WEEKDAYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const;

export type Weekday = (typeof WEEKDAYS)[number];

export interface OpeningHours {
  day: Weekday;
  label: string;
  open: string;
  close: string;
  closed: boolean;
}

export interface SiteDetails {
  name: string;
  addressLines: string[];
  phone: string;
  phoneHref: string;
  email?: string;
  mapEmbedUrl: string;
  hours: OpeningHours[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imagePublicId?: string;
  sortOrder: number;
  isOwner: boolean;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: string;
  subcategory: string;
  freshaId?: string;
  bookable: boolean;
  sortOrder: number;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  dateLabel: string;
  text: string;
  source: string;
}

export interface PageSection {
  id: string;
  heading: string;
  body: string;
  bullets?: string[];
}

export interface HomePageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroLocation: string;
  servicesHeading: string;
  hairCardTitle: string;
  hairCardDescription: string;
  beautyCardTitle: string;
  beautyCardDescription: string;
  welcomeHeading: string;
  welcomeParagraphs: string[];
  welcomeCta: string;
  ctaHeading: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface AboutPageContent {
  heroTitle: string;
  heroSubtitle: string;
  storyHeading: string;
  storyParagraphs: string[];
  studioHeading: string;
  studioParagraphs: string[];
  suiteHeading: string;
  suiteParagraphs: string[];
  valuesHeading: string;
  valuesIntro: string;
  values: { title: string; description: string }[];
  ctaHeading: string;
  ctaBody: string;
}

export interface CatalogPageContent {
  heroTitle: string;
  heroSubtitle: string;
  sectionHeading: string;
  sectionIntro: string;
}

export interface ReviewsPageContent {
  heroTitle: string;
  heroSubtitle: string;
  allReviewsUrl: string;
  allReviewsLabel: string;
}

export interface ContactPageContent {
  heroTitle: string;
  heroSubtitle: string;
  infoHeading: string;
  bookingHeading: string;
  bookingBody: string;
  mapHeading: string;
}

export interface PoliciesPageContent {
  heroTitle: string;
  heroSubtitle: string;
  sections: PageSection[];
}

export interface PrivacyPageContent {
  title: string;
  intro: string;
  body: string;
  sections: PageSection[];
}

export interface MediaContent {
  hero: string;
  about: string;
  hairInterior: string;
  beautyInterior: string;
  exterior: string;
  logo: string;
}

export interface SitePages {
  home: HomePageContent;
  about: AboutPageContent;
  hair: CatalogPageContent;
  beauty: CatalogPageContent;
  reviews: ReviewsPageContent;
  contact: ContactPageContent;
  policies: PoliciesPageContent;
  privacy: PrivacyPageContent;
}

export interface SiteContent {
  version: 1;
  updatedAt: string;
  site: SiteDetails;
  media: MediaContent;
  team: TeamMember[];
  services: ServiceItem[];
  reviews: ReviewItem[];
  pages: SitePages;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function asString(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value : fallback;
}

function asNumber(value: unknown, fallback = 0): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function asBoolean(value: unknown, fallback = false): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === 'string');
}

function requireString(value: unknown, field: string): string {
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`Invalid content: ${field} is required`);
  }
  return value;
}

export function validateSiteContent(value: unknown): SiteContent {
  if (!isRecord(value)) {
    throw new Error('Invalid content: expected an object');
  }

  if (value.version !== 1) {
    throw new Error('Invalid content: unsupported version');
  }

  if (!isRecord(value.site) || !isRecord(value.media) || !isRecord(value.pages)) {
    throw new Error('Invalid content: missing site, media, or pages');
  }

  if (!Array.isArray(value.team) || !Array.isArray(value.services) || !Array.isArray(value.reviews)) {
    throw new Error('Invalid content: team, services, and reviews must be arrays');
  }

  const site = value.site;
  const hours = Array.isArray(site.hours) ? site.hours : [];

  return {
    version: 1,
    updatedAt: requireString(value.updatedAt, 'updatedAt'),
    site: {
      name: requireString(site.name, 'site.name'),
      addressLines: asStringArray(site.addressLines),
      phone: requireString(site.phone, 'site.phone'),
      phoneHref: requireString(site.phoneHref, 'site.phoneHref'),
      email: asString(site.email) || undefined,
      mapEmbedUrl: asString(site.mapEmbedUrl),
      hours: hours.filter(isRecord).map((entry) => ({
        day: WEEKDAYS.includes(entry.day as Weekday) ? (entry.day as Weekday) : 'monday',
        label: asString(entry.label, 'Day'),
        open: asString(entry.open),
        close: asString(entry.close),
        closed: asBoolean(entry.closed),
      })),
    },
    media: {
      hero: asString(value.media.hero, '/hero-bg.jpeg'),
      about: asString(value.media.about, '/about-us.jpg'),
      hairInterior: asString(value.media.hairInterior, '/hair_interior.jpg'),
      beautyInterior: asString(value.media.beautyInterior, '/beauty_interior.jpg'),
      exterior: asString(value.media.exterior, '/exterior.jpg'),
      logo: asString(value.media.logo, '/Logo.jpeg'),
    },
    team: value.team.filter(isRecord).map((member, index) => ({
      id: asString(member.id, `team-${index}`),
      name: asString(member.name),
      role: asString(member.role),
      imageUrl: asString(member.imageUrl, '/default-team.jpg'),
      imagePublicId: asString(member.imagePublicId) || undefined,
      sortOrder: asNumber(member.sortOrder, index),
      isOwner: asBoolean(member.isOwner),
    })),
    services: value.services.filter(isRecord).map((service, index) => ({
      id: asString(service.id, `service-${index}`),
      name: asString(service.name),
      description: asString(service.description),
      price: asString(service.price),
      duration: asString(service.duration),
      category: asString(service.category),
      subcategory: asString(service.subcategory, 'Other'),
      freshaId: asString(service.freshaId) || undefined,
      bookable: asBoolean(service.bookable, true),
      sortOrder: asNumber(service.sortOrder, index),
    })),
    reviews: value.reviews.filter(isRecord).map((review, index) => ({
      id: asString(review.id, `review-${index}`),
      name: asString(review.name),
      rating: Math.min(5, Math.max(1, Math.round(asNumber(review.rating, 5)))),
      dateLabel: asString(review.dateLabel),
      text: asString(review.text),
      source: asString(review.source, 'Google'),
    })),
    pages: value.pages as unknown as SitePages,
  };
}

export function createContentId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
}
