export interface Country {
  code: string;
  currencyCodes: string[];
  name: string;
  wikiDataId: string;
}
export interface FullCountry extends Country {
  callingCode: string;
  capital: string;
  flagImageUrl: string;
  numRegions: number;
}

export interface Link {
  rel: string;
  href: string;
}

export interface Metadata {
  currentOffset: number;
  totalCount: number;
}

export interface ApiResponse {
  data: Country[];
  links: Link[];
  metadata: Metadata;
}

