export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Schedule Your Call",
    description:
      "Book a free 30-minute discovery call. We discuss your active listings, upcoming properties, and goals — so we can recommend exactly the right visual package.",
  },
  {
    number: "02",
    title: "Receive a Customized Package",
    description:
      "Based on your listing, we put together a tailored recommendation — photos, drone, 3D tour, virtual staging, or any combination — matched to your property and budget.",
  },
  {
    number: "03",
    title: "Shoot & Deliver",
    description:
      "We handle everything on shoot day. Professional visuals delivered fast — edited, formatted, and ready to upload directly to MLS and your marketing channels.",
  },
];
