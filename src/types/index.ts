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

export interface ServiceItemProps {
  service: Service;
  isActive: boolean;
  onClick: (id: string) => void;
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

export interface TestimonialItemProps {
  testimonial: Testimonial;
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

export interface GalleryItemProps {
  image: GalleryImage;
  size: 'featured' | 'large' | 'medium' | 'small';
}

// Component Props
export interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export interface AboutProps {
  title: string;
  description: string[];
}

export interface FooterProps {
  year: number;
  email: string;
  companyLinks: NavigationLink[];
  scrollingText: string[];
}

// Common Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Animation Types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
}

// Responsive Types
export type BreakpointSize = 'mobile' | 'tablet' | 'desktop';

export interface ResponsiveConfig<T> {
  mobile: T;
  tablet?: T;
  desktop?: T;
}
