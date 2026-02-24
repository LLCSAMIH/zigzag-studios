export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaLabel: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$299",
    description: "Perfect for small properties and quick turnarounds.",
    features: [
      "Up to 10 HDR photos",
      "Basic editing & color correction",
      "24-hour delivery",
      "Web-optimized images",
      "MLS-ready formats",
    ],
    highlighted: false,
    ctaLabel: "Get Started",
  },
  {
    name: "Professional",
    price: "$599",
    description: "Our most popular package for serious listings.",
    features: [
      "Up to 30 HDR photos",
      "Advanced editing & retouching",
      "Drone aerial shots included",
      "Virtual twilight conversion",
      "Same-day delivery available",
      "Social media formats",
    ],
    highlighted: true,
    ctaLabel: "Book Now",
  },
  {
    name: "Premium",
    price: "$999",
    description: "Full-service coverage for luxury properties.",
    features: [
      "Up to 50 HDR photos",
      "Drone photography & video",
      "3D virtual tour included",
      "AI virtual staging (3 rooms)",
      "Video walkthrough",
      "Priority same-day delivery",
      "Print-ready formats",
    ],
    highlighted: false,
    ctaLabel: "Contact Us",
  },
];
