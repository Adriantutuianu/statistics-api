export interface Country {
    code: string;
    currencyCodes: string[];
    name: string;
    wikiDataId: string;
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
  