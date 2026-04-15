/**
 * Shared type definitions for the portfolio
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  image?: string;
}

export type Theme = 'light' | 'dark';
export type Language = 'es' | 'en';
