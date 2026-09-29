// Business details shared with dstechnoverse.com. Edit here and rebuild.
export const site = {
  name: "CORSIA Carbon Credit",
  shortName: "CORSIA Carbon Credit",
  // Switch to https://corsiacarboncredit.com once the domain is connected.
  url: "https://corsiacarboncredit.pages.dev",
  parent: {
    name: "DSTechnoverse",
    url: "https://dstechnoverse.com",
    founded: 2015,
  },
  description:
    "Marketplace and advisory desk for CORSIA-eligible and voluntary carbon credits. Registry-issued projects, unit-level due diligence and cancellation for aircraft operators, corporates and project developers. Operated by DSTechnoverse, Indore.",
  phone: "+91 80857 78977",
  phoneHref: "tel:+918085778977",
  whatsapp: "918085778977",
  email: "dstechnoverse@gmail.com",
  address: {
    line1: "201 Arihant Kalashri Pride",
    line2: "380, Alok Nagar, Kanadia Road",
    city: "Indore",
    region: "Madhya Pradesh",
    postcode: "452016",
    country: "India",
  },
  mapsUrl: "https://maps.google.com/?q=201+Arihant+Kalashri+Pride+380+Alok+Nagar+Indore+MP+452016",
  hours: "Mon – Sat, 10:00 – 19:00 IST",
  social: [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/dstechnoverse/" },
    { name: "X", url: "https://x.com/dstechnoverse" },
    { name: "Facebook", url: "https://www.facebook.com/dstechnoverse" },
    { name: "Instagram", url: "https://www.instagram.com/dstechnoverse/" },
    { name: "YouTube", url: "https://www.youtube.com/@DSTECHNOVERSEOFFICIAL" },
  ],
  // Buyer / seller intake runs on the Verdex platform.
  intake: {
    buy: "https://carboncredit.dstechnoverse.com/buy/new",
    sell: "https://carboncredit.dstechnoverse.com/sell",
    home: "https://carboncredit.dstechnoverse.com/",
  },
  clients: "1,200+",
  team: [
    {
      name: "Shwetam Modi",
      role: "Founder & Lead Developer",
      image: "https://dstechnoverse.com/r2/1776517579536-j6c6eg8b.png",
      bio: "Software developer and entrepreneur who founded DSTechnoverse in 2015. Shwetam leads the firm's technical vision and delivery, including the carbon markets desk.",
      links: [{ name: "Website", url: "https://shwetammodi.netlify.app" }],
    },
    {
      name: "Satyam Modi",
      role: "Senior Software Developer",
      image: "https://dstechnoverse.com/r2/1776515190408-andizd7k.jpeg",
      bio: "Builds the data systems behind the desk — emissions accounting, registry reconciliation and the marketplace itself.",
      links: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/satyamok" },
        { name: "Website", url: "https://satyammodi.com" },
      ],
    },
  ],
};

export const nav = [
  { href: "/marketplace/", label: "Marketplace" },
  { href: "/services/", label: "CORSIA Services" },
  { href: "/knowledge-base/", label: "Knowledge Base" },
  { href: "/insights/", label: "Insights" },
  { href: "/calculator/", label: "Calculator" },
  { href: "/about/", label: "About" },
];

export const categories = {
  Forestry: {
    blurb: "Afforestation, reforestation and agroforestry removals.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=70",
  },
  Renewable: {
    blurb: "Grid-connected solar, wind and small hydro.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=70",
  },
  "Blue Carbon": {
    blurb: "Mangroves, peatland and coastal wetlands.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=70",
  },
  Agriculture: {
    blurb: "Cookstoves, rice methane and solar irrigation.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=70",
  },
  "Waste & Biogas": {
    blurb: "Methane capture, composting and waste-to-energy.",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=70",
  },
  Industrial: {
    blurb: "Waste-heat recovery, fuel switch and efficiency.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=70",
  },
};

export const sdgs = {
  1: ["No Poverty", "#E5243B"],
  2: ["Zero Hunger", "#DDA63A"],
  3: ["Good Health and Well-being", "#4C9F38"],
  4: ["Quality Education", "#C5192D"],
  5: ["Gender Equality", "#FF3A21"],
  6: ["Clean Water and Sanitation", "#26BDE2"],
  7: ["Affordable and Clean Energy", "#FCC30B"],
  8: ["Decent Work and Economic Growth", "#A21942"],
  9: ["Industry, Innovation and Infrastructure", "#FD6925"],
  10: ["Reduced Inequalities", "#DD1367"],
  11: ["Sustainable Cities and Communities", "#FD9D24"],
  12: ["Responsible Consumption and Production", "#BF8B2E"],
  13: ["Climate Action", "#3F7E44"],
  14: ["Life Below Water", "#0A97D9"],
  15: ["Life on Land", "#56C02B"],
  16: ["Peace, Justice and Strong Institutions", "#00689D"],
  17: ["Partnerships for the Goals", "#19486A"],
};
