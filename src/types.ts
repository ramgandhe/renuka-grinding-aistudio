export interface MachineSpec {
  label: string;
  value: string;
  category?: string;
}

export interface MachineModel {
  id: string;
  name: string;
  category: 'cylindrical' | 'internal' | 'universal';
  categoryLabel: string;
  tagline: string;
  description: string;
  imageAlt: string;
  accentColor: string;
  modelsAvailable: string[];
  keyHighlights: string[];
  specs: MachineSpec[];
  standardAccessories: string[];
  optionalAccessories: string[];
  videoUrl?: string;
  youtubeId?: string;
}

export interface RetrofitProject {
  id: number;
  customer: string;
  location: string;
  category: 'Automotive' | 'Machine Tools' | 'Bearings' | 'Hydraulics & General';
  machines: string[];
  description?: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  experience: string;
  background: string;
  bio: string;
  specialization: string;
}

export interface VideoResource {
  id: string;
  title: string;
  category: 'Journey' | 'Product Demo' | 'Customer Story';
  youtubeId: string;
  duration: string;
  description: string;
}
