import { Building, Award, Users, CheckCircle } from "lucide-react";

export const clientCategories = [
  {
    title: "Government & Defense",
    icon: Building,
    clients: ["KRL", "PAEC", "PMO", "CDA"],
    description:
      "Serving critical government and defense infrastructure projects",
  },
  {
    title: "Educational Institutions",
    icon: Users,
    clients: ["NUST", "MIA"],
    description:
      "Supporting educational facilities with reliable pipeline solutions",
  },
  {
    title: "Industrial & Manufacturing",
    icon: Award,
    clients: ["OGDCL", "HMC", "Bestway Cement", "Shaigan Pharma"],
    description: "Powering industrial operations with quality pipeline systems",
  },
  {
    title: "Commercial & Hospitality",
    icon: CheckCircle,
    clients: ["Islamabad Club", "Pepsi", "SABRO"],
    description: "Delivering excellence in commercial pipeline installations",
  },
];
