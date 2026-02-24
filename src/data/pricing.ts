export interface PricingTier {
  number: string;
  name: string;
  tagline: string;
  features: string[];
  highlighted: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    number: "01",
    name: "Listing Ready",
    tagline: "Everything you need to list fast.",
    features: [
      "20–25 professional interior & exterior photos",
      "Aerial drone photos to showcase the full property",
      "MLS-ready formatting and delivery",
      "24-hour turnaround on all images",
      "Clean, natural lighting and composition",
      "Optimized for fast, professional listings",
    ],
    highlighted: false,
  },
  {
    number: "02",
    name: "Market Leader",
    tagline: "Stand out where it matters most.",
    features: [
      "30–35 professional interior & exterior photos",
      "Everything in Listing Ready",
      "Choice of Zillow 3D Home® tour or Matterport 3D tour",
      "24-hour turnaround on all images",
      "Enhanced visual storytelling to increase buyer engagement",
      "Ideal for listings that need to stand out online",
    ],
    highlighted: true,
  },
  {
    number: "03",
    name: "Luxury Showcase",
    tagline: "Premium attention for premium listings.",
    features: [
      "35–40 professional interior & exterior photos",
      "Everything in Market Leader",
      "Cinematic video with premium composition",
      "Vertical video for social media and listing platforms",
      "Twilight / dusk exterior shots",
      "24-hour turnaround on all images",
      "Premium attention to detail for high-end listings",
    ],
    highlighted: false,
  },
];
