export const siteConfig = {
  name: "Homestead Assembly Body of Christ",
  shortName: "Homestead Assembly",
  descriptor: "Body of Christ",
  welcome: "A place to grow in faith, find community, and live with purpose.",
  welcomeNote: "Welcome home.",
  location: "Location details coming soon",
  haym: {
    name: "Homestead Assembly Youth Meeting",
    shortName: "HAYM",
    start: { year: 2027, month: 8, day: 4 },
    end: { year: 2027, month: 8, day: 7 },
    dateLabel: "August 4–7, 2027",
    theme: "A week to gather, grow, and go forward.",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Who We Are", href: "/#who-we-are" },
    { label: "Mission", href: "/#mission" },
    { label: "Testimonies", href: "/#testimonies" },
    { label: "Youth", href: "/youth" },
    { label: "HAYM", href: "/youth#haym" },
    { label: "Messages", href: "/#messages" },
    { label: "Events", href: "/#events" },
    { label: "Livestream", href: "/#livestream" },
    { label: "Contact", href: "/#contact" },
  ],
  youthNavigation: [
    { label: "Youth Home", href: "/youth" },
    { label: "HAYM", href: "/youth#haym" },
    { label: "Youth Businesses", href: "/youth/businesses" },
    { label: "Youth Events", href: "/youth#youth-events" },
    { label: "Youth Media", href: "/youth#youth-media" },
  ],
  socialLinks: [
    { label: "Instagram", href: "", status: "Coming soon" },
    { label: "YouTube", href: "", status: "Coming soon" },
    { label: "Facebook", href: "", status: "Coming soon" },
  ],
  contactNote: "Service times and contact details will be shared here soon.",
} as const;

export const missionCards = [
  {
    number: "01",
    title: "Faith that grows",
    symbol: "✳",
    body: "A community making room to learn, ask questions, and grow in faith together.",
  },
  {
    number: "02",
    title: "Room for everyone",
    symbol: "⌂",
    body: "A welcoming place for people and families to find connection and encouragement.",
  },
  {
    number: "03",
    title: "Purpose in everyday life",
    symbol: "↗",
    body: "Encouragement to carry compassion, service, and hope into the places we live.",
  },
] as const;

export const testimonies = [
  {
    title: "A story of renewed hope",
    excerpt:
      "This space is being prepared for a real story from someone in the Homestead Assembly community.",
    person: "Community story",
    imageLabel: "Portrait photography will be added here",
    fullStory:
      "When a church member is ready to share their story, their words will be added here with their permission.",
  },
  {
    title: "Finding a place to belong",
    excerpt:
      "A future testimony preview about the friendships and encouragement found in community.",
    person: "Community story",
    imageLabel: "Portrait photography will be added here",
    fullStory:
      "This is sample copy to show how a longer testimony can open from the preview card.",
  },
] as const;

export const events = [
  {
    title: "Community gathering",
    date: "Details coming soon",
    description: "A place to share upcoming church gatherings and moments to connect.",
    imageLabel: "Event photography will be added here",
  },
  {
    title: "Youth meet-up",
    date: "Details coming soon",
    description: "Youth event information will be shared as dates are confirmed.",
    imageLabel: "Youth event photography will be added here",
  },
] as const;

export const sampleBusinesses = [
  {
    name: "Good Ground Studio",
    category: "Creative & design",
    description:
      "Sample profile for a young creative building thoughtful visual identities and handmade goods.",
    imageLabel: "Sample creative studio photography",
    initials: "GG",
    instagram: "",
    website: "",
    tiktok: "",
    facebook: "",
    email: "",
    phone: "",
    gallery: [],
    bookingUrl: "",
  },
  {
    name: "Sunday Table",
    category: "Food & hospitality",
    description:
      "Sample profile for a youth-led food business bringing people together around the table.",
    imageLabel: "Sample food and hospitality photography",
    initials: "ST",
    instagram: "",
    website: "",
    tiktok: "",
    facebook: "",
    email: "",
    phone: "",
    gallery: [],
    bookingUrl: "",
  },
  {
    name: "Kindred Threads",
    category: "Apparel",
    description:
      "Sample profile for an independent apparel label with a focus on quality and everyday wear.",
    imageLabel: "Sample apparel photography",
    initials: "KT",
    instagram: "",
    website: "",
    tiktok: "",
    facebook: "",
    email: "",
    phone: "",
    gallery: [],
    bookingUrl: "",
  },
] as const;

export const latestMessage = {
  title: "A message for the week ahead",
  speaker: "Homestead Assembly",
  description:
    "Message recordings and notes will be added here as they become available.",
} as const;
