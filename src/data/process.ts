export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We discuss your vision, property details, and specific requirements to plan the perfect shoot.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We prepare shot lists, scout optimal lighting times, and coordinate logistics for shoot day.",
  },
  {
    number: "03",
    title: "Shooting",
    description:
      "Our team captures your property with professional HDR equipment, drones, and styling expertise.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Professional editing, color grading, and retouching — delivered fast in all formats you need.",
  },
];
