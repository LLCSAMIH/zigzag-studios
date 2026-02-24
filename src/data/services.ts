export interface Service {
  number: string;
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    number: "00",
    name: "Overview",
    description: "Complete Services Portfolio",
  },
  {
    number: "01",
    name: "Real Estate Photography",
    description: "Professional HDR photography packages",
  },
  {
    number: "02",
    name: "Drone Photography & Video",
    description: "Aerial perspectives for properties",
  },
  {
    number: "03",
    name: "3D Virtual Tours",
    description: "Immersive property walkthroughs",
  },
  {
    number: "04",
    name: "AI Virtual Staging",
    description: "Transform empty spaces digitally",
  },
  {
    number: "05",
    name: "Event Photography",
    description: "Corporate events and celebrations",
  },
  {
    number: "06",
    name: "Commercial & Food",
    description: "Restaurant and product photography",
  },
];
