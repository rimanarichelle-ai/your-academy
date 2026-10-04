export interface ProgramItem {
  id: string;
  category: 'languages' | 'academic';
  title: string;
  subTitleEn?: string;
  badge?: string;
  description: string;
  highlights: string[];
  priceTag: string;
  durationNote?: string;
  targetAudience: string;
  certification?: string;
}

export interface ContactInfo {
  academyNameAr: string;
  academyNameEn: string;
  slogan: string;
  locationName: string;
  locationFull: string;
  cityState: string;
  phones: string[];
  email: string;
  startDateCampaign: string;
  academicYear: string;
  priceOffer: string;
}

export interface AcademyLocation {
  id: string;
  name: string;
  nameAr: string;
  city: string;
  cityEn: string;
  address: string;
  locationEn: string;
  phone: string;
  isMain: boolean;
  postalCode?: string;
  addressEn?: string;
  branchNameAr?: string;
  branchNameEn?: string;
  cityFullAr?: string;
  cityFullEn?: string;
  mapUrl?: string;
  exactAddressAr?: string;
  exactAddressEn?: string;
}

export interface RegistrationFormData {
  fullName: string;
  phone: string;
  email?: string;
  branch?: string;
  programType: string;
  studyLevel: string;
  preferredTiming: string;
  notes?: string;
}
