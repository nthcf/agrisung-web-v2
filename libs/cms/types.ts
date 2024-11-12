export type Meta = {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
};

export type ApiResp<T> = {
  data: T;
  meta: Meta;
};

export type Media = {
  name: string;
  url: string;
};

export type Country = {
  code: string;
  name: string;
};

export type ProcessType = {
  coverMedia: Media;
  coverMediaPosition: number;
  id: number;
  name: string;
  slug: string;
};

export type Product = {
  availablitiy: string;
  color: string;
  coverMedia: Media;
  description: string;
  formAndCut: string;
  id: number;
  images: Media[];
  ingredients: string;
  name: string;
  origin: Country;
  processedStyle: string;
  processType: ProcessType;
  rawProducts: RawProduct[];
  season: string;
  sizeOrWeight: string;
  slug: string;
  suppliers: Supplier[];
};

export type RawProduct = {
  coverMedia: Media;
  id: number;
  name: string;
  products: Product[];
  slug: string;
};

export type Supplier = {
  address: string;
  businessType: string;
  certs: Media[];
  country: Country;
  coverMedia: Media;
  description: string;
  exportHistory: Country[];
  id: number;
  logoMedia: Media;
  name: string;
  news: News[];
  numberOfEmployees: string;
  origin: Country;
  products: Product[];
  rating: number;
  slug: string;
  technologies: Technology[];
  website: string;
  whyUs: string;
  yearEstablished: string;
};

export type Technology = {
  advantages: string;
  coverMedia: Media;
  description: string;
  id: number;
  name: string;
  slug: string;
  suppliers: Supplier[];
};

export type News = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[];
  coverMedia: Media;
  excerpt: string;
  id: number;
  publishedAt: string;
  slug: string;
  tags: string;
  title: string;
};

export type Lead = {
  additionalInfo: string;
  company: string;
  documentId: string;
  email: string;
  id: number;
  message: string;
  name: string;
  phone: string;
  type: string;
};

export type Price = {
  currentPrice: number;
  id: number;
  oldPrice: number;
  title: string;
};

export type HarvestMap = {
  data: HarvestData[];
  id: number;
  title: string;
};

export type HarvestData = {
  coverMedia: Media;
  data: string;
  id: number;
  name: string;
};

export type HomeConfig = {
  harvestMaps: HarvestMap[];
  headerPriceTable: Price[];
  marketFollowProducts: RawProduct[];
};

export type Banner = {
  ctaLink: string;
  ctaTitle: string;
  description: string;
  imgMedia: Media;
  position: "pos1" | "pos2" | "pos3";
  style: "horizontal" | "vertical";
  subtitle: string;
  title: string;
};

export type Recommended = {
  id: number;
  products: {
    ctaLink: string;
    ctaTitle: string;
    id: number;
    products: Product[];
    title: string;
  }[];
  suppliers: {
    ctaLink: string;
    ctaTitle: string;
    id: number;
    suppliers: Supplier[];
    title: string;
  }[];
  title: string;
};

export type HomeConfigV2 = {
  banners: Banner[];
  featuredProduct: Product;
  featuredSupplier: Supplier;
  recommended: Recommended;
};
