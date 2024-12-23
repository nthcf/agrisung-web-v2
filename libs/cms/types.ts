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

export type Currency = {
  currency: string;
  alphabeticCode: string;
};

export type Product = {
  availablitiy: string;
  color: string;
  coverMedia: Media;
  currency: Currency;
  description: string;
  documentId: string;
  formAndCut: string;
  id: number;
  images: Media[];
  ingredients: string;
  moq: string;
  name: string;
  origin: Country;
  packagingType: string;
  paymentTerms: { paymentTerm: string }[];
  priceMax: number;
  priceMin: number;
  processedStyle: string;
  processType: ProcessType;
  rawProduct: RawProduct;
  samples: { sample: string }[];
  season: string;
  shelfLife: string;
  shipment: string;
  shipments: { shipment: string }[];
  sizeOrWeight: string;
  slug: string;
  supplier: Supplier;
  varieties: { variety: string }[];
  variety: string;
};

export type RawProduct = {
  coverMedia: Media;
  id: number;
  name: string;
  products: Product[];
  slug: string;
};

export type Certification = {
  id: number;
  logoMedia: Media;
  name: string;
};

export type Supplier = {
  address: string;
  annualSalesRevenue: string;
  businessType: string;
  certifications: Certification[];
  certs: Media[];
  country: Country;
  coverMedia: Media;
  description: string;
  documentId: string;
  exportHistories: Country[];
  id: number;
  logoMedia: Media;
  medias: Media[];
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
  youtubeId?: string;
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
  email: string;
  id: number;
  message: string;
  name: string;
  phone: string;
  type: string;
};

export type Price = {
  currency: string;
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

type BannerRatio = "32_9" | "64_9";

type BannerMobileRatio = "21_9" | "32_9";

type BannerVariant = "image_only" | "with_text";

export type Banner = {
  ctaLink: string;
  ctaTitle: string;
  description: string;
  dimImage: boolean;
  imgMedia: Media;
  mobileAspectRatio: `ar-${BannerMobileRatio}`;
  position: "pos1" | "pos2" | "pos3";
  style: `${BannerVariant}-${BannerRatio}`;
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
  featuredProduct: Product;
  featuredSupplier: Supplier;
  homepageBanners: Banner[];
  listingBanners: Banner[];
  publicPriceList: Price[];
  recommended: Recommended;
  searchResultBanners: Banner[];
};
