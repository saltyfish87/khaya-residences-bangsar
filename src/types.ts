export interface ProjectSpecification {
  label: string;
  value: string;
}

export interface KeyFeature {
  id: string;
  title: string;
  description: string;
}

export interface NeighborDestination {
  name: string;
  distance: string;
  driveTime: string;
}

export interface ConnectivityRoute {
  name: string;
  description: string;
}

export interface LayoutType {
  type: string;
  size: string;
  rooms: string;
  baths: string;
  carpark: string;
  features: string[];
  imageUrl: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  category: 'Exterior' | 'Lobby' | 'Facilities' | 'Sky Facilities' | 'Retail Podium' | 'Lifestyle';
  title: string;
  description: string;
  imageUrl: string;
}

export interface FacilityItem {
  name: string;
  category: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

export interface EnquiryData {
  name: string;
  phone: string;
  email: string;
  country: string;
  message: string;
  agreement: boolean;
}
