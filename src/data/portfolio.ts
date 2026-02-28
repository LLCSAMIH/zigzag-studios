export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "real-estate" | "interior" | "exterior" | "drone" | "commercial";
  images: string[];
  featured: string;
  wide: boolean;
}

export const projects: Project[] = [
  {
    id: "modern-living",
    title: "Modern Living",
    description:
      "Luxury interior photography showcasing contemporary design and natural light.",
    tags: ["Real Estate", "Interior", "HDR"],
    category: "interior",
    images: [
      "/portfolio/082A1374-HDR.jpg",
      "/portfolio/082A1383-HDR.jpg",
      "/portfolio/082A1386-HDR.jpg",
      "/portfolio/082A1389-HDR.jpg",
    ],
    featured: "/portfolio/082A1374-HDR.jpg",
    wide: true,
  },
  {
    id: "outdoor-spaces",
    title: "Outdoor Spaces",
    description:
      "Capturing the beauty of decks, patios, and exterior architecture.",
    tags: ["Exterior", "Architecture"],
    category: "exterior",
    images: [
      "/portfolio/082A1467-HDR.jpg",
      "/portfolio/082A1470-HDR.jpg",
      "/portfolio/082A1473-HDR.jpg",
    ],
    featured: "/portfolio/082A1467-HDR.jpg",
    wide: false,
  },
  {
    id: "kitchen-bath",
    title: "Kitchen & Bath",
    description:
      "Detail-oriented photography of premium kitchen and bathroom spaces.",
    tags: ["Interior", "Detail", "HDR"],
    category: "interior",
    images: [
      "/portfolio/082A1431-HDR.jpg",
      "/portfolio/082A1434-HDR.jpg",
      "/portfolio/082A1443-HDR.jpg",
    ],
    featured: "/portfolio/082A1431-HDR.jpg",
    wide: false,
  },
  {
    id: "full-property",
    title: "Full Property Tour",
    description:
      "Comprehensive property documentation from every angle — interior, exterior, and aerial.",
    tags: ["Real Estate", "Full Tour", "Premium"],
    category: "real-estate",
    images: [
      "/portfolio/082A1500-HDR.jpg",
      "/portfolio/082A1503-HDR.jpg",
      "/portfolio/082A1506-HDR.jpg",
      "/portfolio/082A1509-HDR.jpg",
      "/portfolio/082A1512-HDR.jpg",
    ],
    featured: "/portfolio/082A1500-HDR.jpg",
    wide: true,
  },
  {
    id: "suburban-elegance",
    title: "Suburban Elegance",
    description:
      "A refined suburban home captured in warm afternoon light.",
    tags: ["Real Estate", "Exterior", "HDR"],
    category: "real-estate",
    images: [
      "/portfolio/082A1392-HDR.jpg",
      "/portfolio/082A1395-HDR.jpg",
      "/portfolio/082A1398-HDR.jpg",
      "/portfolio/082A1404-HDR.jpg",
    ],
    featured: "/portfolio/082A1392-HDR.jpg",
    wide: false,
  },
  {
    id: "open-concept",
    title: "Open Concept Living",
    description:
      "Spacious floor plans photographed to emphasize flow and livability.",
    tags: ["Interior", "Architecture", "HDR"],
    category: "interior",
    images: [
      "/portfolio/082A1410-HDR.jpg",
      "/portfolio/082A1419-HDR.jpg",
      "/portfolio/082A1422-HDR.jpg",
    ],
    featured: "/portfolio/082A1410-HDR.jpg",
    wide: true,
  },
  {
    id: "curb-appeal",
    title: "Curb Appeal",
    description:
      "Front facades and landscaping that make the first impression count.",
    tags: ["Exterior", "Real Estate"],
    category: "exterior",
    images: [
      "/portfolio/082A1476-HDR.jpg",
      "/portfolio/082A1479-HDR.jpg",
      "/portfolio/082A1482-HDR.jpg",
      "/portfolio/082A1488-HDR.jpg",
    ],
    featured: "/portfolio/082A1476-HDR.jpg",
    wide: false,
  },
  {
    id: "luxury-finishes",
    title: "Luxury Finishes",
    description:
      "High-end materials and craftsmanship captured with precision lighting.",
    tags: ["Interior", "Detail", "Premium"],
    category: "interior",
    images: [
      "/portfolio/082A1446-HDR.jpg",
      "/portfolio/082A1449-HDR.jpg",
      "/portfolio/082A1452-HDR.jpg",
      "/portfolio/082A1461-HDR.jpg",
      "/portfolio/082A1464-HDR.jpg",
    ],
    featured: "/portfolio/082A1446-HDR.jpg",
    wide: false,
  },
  {
    id: "aerial-perspectives",
    title: "Aerial Perspectives",
    description:
      "Drone photography showcasing properties and neighborhoods from above.",
    tags: ["Drone", "Aerial", "Real Estate"],
    category: "drone",
    images: [
      "/portfolio/082A1494-HDR.jpg",
      "/portfolio/082A1497-HDR.jpg",
      "/portfolio/082A1515-HDR.jpg",
      "/portfolio/082A1518-HDR.jpg",
    ],
    featured: "/portfolio/082A1494-HDR.jpg",
    wide: true,
  },
  {
    id: "twilight-collection",
    title: "Twilight Collection",
    description:
      "Properties captured during golden hour and twilight for maximum drama.",
    tags: ["Real Estate", "Exterior", "Premium"],
    category: "real-estate",
    images: [
      "/portfolio/082A1521-HDR.jpg",
      "/portfolio/082A1524-HDR.jpg",
      "/portfolio/082A1527-HDR.jpg",
      "/portfolio/082A1530-HDR.jpg",
      "/portfolio/082A1533-HDR.jpg",
      "/portfolio/082A1536-HDR.jpg",
      "/portfolio/082A1539-HDR.jpg",
      "/portfolio/082A1542-HDR.jpg",
    ],
    featured: "/portfolio/082A1521-HDR.jpg",
    wide: true,
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "real-estate", label: "Real Estate" },
  { id: "interior", label: "Interior" },
  { id: "exterior", label: "Exterior" },
  { id: "drone", label: "Drone" },
] as const;

export const homepageCategories = [
  { id: "interior", label: "Modern Interiors" },
  { id: "exterior", label: "Exterior & Architecture" },
  { id: "drone", label: "Twilight & Aerial" },
] as const;
