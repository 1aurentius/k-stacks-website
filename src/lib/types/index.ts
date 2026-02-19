// Navigation Types
export interface NavigationLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

// Service Types
export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  isActive?: boolean;
  startingPrice: number;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

// Gallery Types
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  story: string;
  date: string;
  featured?: boolean;
}

// Common Types
export type BreakpointSize = 'mobile' | 'tablet' | 'desktop';
