export const site = {
  name: "RH Tile Works",
  shortName: "RH Tile Works",
  phone: "(781) 500-2983",
  phoneHref: "tel:+17815002983",
  facebook: "https://www.facebook.com/100010454592638",
  email: "info@rhtileworks.com", // placeholder — confirm with client
  address: "Worcester, MA",
  mapsHref: "https://maps.google.com/?q=Worcester,+MA",
  hours: "By appointment — message us anytime, we reply same day",
  tagline: "Worcester's tile installation crew — bathrooms, kitchens & floors done right.",
  serving: "Tile installation & repair for Worcester & Worcester County",
  city: "Worcester",
  region: "Worcester County", // broader service region, used in narrative copy
  license: "", // e.g. "Lic. #1043718" — leave blank if not applicable, shows nowhere if empty

  // ── Logo ──────────────────────────────────────────────────────────────
  // "image" = real logo file at /images/logo.png. "wordmark" = CSS text logo
  // (business name + rule lines), used when the client has no vector logo.
  logo: {
    mode: "wordmark" as "image" | "wordmark",
    tagline: "Tile Installation & Repair", // only shown in wordmark mode
  },

  // ── Header tagline strip ─────────────────────────────────────────────
  headerTag: "Worcester's tile installation crew — bathrooms, kitchens & floors",

  // ── Footer ────────────────────────────────────────────────────────────
  footerBlurb:
    "Ruan Henrique's tile crew handles bathroom tile, kitchen backsplashes, flooring, shower and tub surrounds, tile repair and regrouting, and commercial tile work across Worcester and Worcester County.",
  footerVisitLine: "Free estimates — message us your project details",
  footerAreaSuffix: "and surrounding Worcester County, Massachusetts communities.",

  // ── CTA band (bottom of every page) ─────────────────────────────────
  ctaHeading: "Ready to start your",
  ctaHeadingAccent: "tile project?",
  ctaSub:
    "Send us a few photos and the rooms you have in mind — we'll message you back with a straight answer and a fair price.",

  // ── ChatBot ───────────────────────────────────────────────────────────
  chatbot: {
    icon: "wrench" as "droplets" | "paintroller" | "wrench" | "flame",
    greeting: "Hey there! 👋 Welcome to RH Tile Works. What can we help you with?",
    quick: [
      { key: "estimate", label: "🧱 Get a free estimate" },
      { key: "repair", label: "🔧 Tile repair / regrouting" },
      { key: "commercial", label: "🏢 Commercial tile work" },
      { key: "visit", label: "📍 Service area" },
      { key: "human", label: "💬 Talk to a person" },
    ],
    topicMap: {
      estimate: "Free estimate",
      repair: "Tile repair / regrouting",
      commercial: "Commercial tile work",
      human: "General question",
    } as Record<string, string>,
    detailPrompt: "Got it. Briefly, what's the project — which room(s) and roughly how big?",
  },

  // ── Page <title>/<meta description> ─────────────────────────────────
  pageMeta: {
    home: {
      title: "RH Tile Works | Tile Installation & Repair in Worcester, MA",
      description:
        "RH Tile Works is Worcester, MA's tile installation crew: bathroom tile, kitchen backsplashes, flooring, shower & tub surrounds, tile repair/regrouting and commercial tile work. Message us on Facebook for a free estimate.",
      keywords: [
        "tile installer Worcester MA",
        "bathroom tile installation Worcester",
        "kitchen backsplash tile Worcester MA",
        "tile flooring installation Worcester County",
        "shower tile installation Massachusetts",
        "tile repair and regrouting Worcester",
        "commercial tile installation Worcester MA",
        "tile contractor Worcester County",
      ],
    },
    services: {
      title: "Services | RH Tile Works — Tile Installation in Worcester, MA",
      description:
        "Bathroom tile, kitchen backsplashes, flooring, shower/tub surrounds, tile repair & regrouting, and commercial tile work — RH Tile Works in Worcester, MA. Message us for a free estimate.",
    },
    contact: {
      title: "Contact | RH Tile Works — Worcester, MA",
      description:
        "Message RH Tile Works on Facebook for a free tile installation estimate in Worcester, MA and Worcester County, or send your project details through the form below.",
    },
  },
};

// Google Maps embed src, derived from the address so it's never hand-typed wrong
export function mapEmbedSrc(address: string = site.address) {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}
export function mapTitle(name: string = site.name, address: string = site.address) {
  return `${name} — ${address}`;
}

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const socials = [
  { label: "Facebook", href: site.facebook, icon: "facebook" },
  { label: "Google", href: "https://maps.google.com/?q=Worcester,+MA", icon: "google" },
  { label: "Instagram", href: "#", icon: "youtube" }, // placeholder — confirm real page
];

// Contact form service dropdown
export const contactServices = [
  "Bathroom Tile",
  "Kitchen Backsplash",
  "Flooring Tile",
  "Shower / Tub Surround",
  "Tile Repair & Regrouting",
  "Commercial Tile Work",
  "Something Else",
];
export const contactFormButtonLabel = "Send My Project Details";

// Icon strip directly under the hero
export const serviceStrip = [
  { label: "Bathroom Tile", icon: "showerhead" },
  { label: "Kitchen Backsplash", icon: "store" },
  { label: "Flooring Tile", icon: "boxes" },
  { label: "Repair & Regrouting", icon: "wrench" },
];

// "Tired of…" pain points
export const painPoints = [
  "Messaging three tile guys and hearing nothing back",
  "A quoted price that changes once the job starts",
  "Grout lines that crack or discolor within a year",
  "Waiting weeks for someone to even look at the job",
  "Tile work that looks fine until you check the corners",
  "No one who'll handle a small repair, only full jobs",
];

// 2×2 value grid
export const valueProps = [
  {
    icon: "wrench",
    title: "Skilled Tile Installers",
    desc: "Bathrooms, kitchens, floors and commercial spaces — laid true, level and tight by people who do this every day.",
  },
  {
    icon: "handshake",
    title: "Upfront Pricing, No Surprises",
    desc: "One clear estimate before we start. You'll never get a bigger number after the tile's already cut.",
  },
  {
    icon: "store",
    title: "Small Jobs Welcome",
    desc: "A cracked tile, a regrout, a single backsplash — we handle repairs and small projects, not just full remodels.",
  },
  {
    icon: "warehouse",
    title: "Local & Reliable",
    desc: "Based right here in Worcester — straight answers, fair prices, and a crew that shows up when it says it will.",
  },
];

// "Here's what you can expect"
export const expectBullets = [
  "Clean, level, tightly-set tile every time",
  "Upfront pricing before any work begins",
  "Careful prep and clean job-site practices",
  "Fast replies to Facebook messages",
  "Residential and commercial work, done right",
];

// Honest trust strip
export const trustBadges = [
  "Free Estimates",
  "Upfront Pricing",
  "Same-Week Scheduling",
  "Small Jobs Welcome",
  "Residential & Commercial",
  "Local & Reliable",
];

// What We Do (image cards)
export const services = [
  {
    title: "Bathroom Tile Installation",
    desc: "Floors, walls and tub surrounds tiled clean and level — from a single powder room to a full master bath remodel.",
    img: "/images/bathroom-tile.jpg",
  },
  {
    title: "Kitchen Backsplash",
    desc: "Backsplashes cut and set precisely around outlets, cabinets and counters, with grout lines that stay straight for years.",
    img: "/images/kitchen-backsplash.jpg",
  },
  {
    title: "Flooring Tile",
    desc: "Porcelain, ceramic and stone-look flooring installed level and square, in kitchens, entryways, basements and beyond.",
    img: "/images/flooring-tile.jpg",
  },
  {
    title: "Shower & Tub Surrounds",
    desc: "Fully tiled shower and tub surrounds, waterproofed and sloped correctly so they hold up for the long run.",
    img: "/images/shower-surround.jpg",
  },
  {
    title: "Tile Repair & Regrouting",
    desc: "Cracked tiles replaced, loose tiles reset, and tired grout lines cut out and redone — small jobs handled without hassle.",
    img: "/images/tile-repair.jpg",
  },
  {
    title: "Commercial Tile Work",
    desc: "Durable tile installation for offices, restaurants and retail spaces, scheduled to fit around your business hours.",
    img: "/images/commercial-tile.jpg",
  },
];

export const reasons = [
  {
    title: "Skilled Installers, Real Work",
    desc: "Bathroom, kitchen and floor tile handled by people who lay tile every day — not a subcontractor learning on your job.",
  },
  {
    title: "Upfront Pricing on Every Job",
    desc: "You'll know the price before we start. No surprise numbers once the old tile's already ripped out.",
  },
  {
    title: "Repairs, Not Just Remodels",
    desc: "Got one cracked tile or a grout line that's seen better days? We'll come handle it — no job's too small.",
  },
  {
    title: "Worcester, Not a Franchise",
    desc: "A local crew you can message directly — straight answers and fair prices, every visit and every job.",
  },
];

export const steps = [
  {
    title: "Send Us a Message",
    desc: "Message us on Facebook with what's going on — a full remodel, a repair, or just a few questions. Photos help.",
  },
  {
    title: "We Scope the Job",
    desc: "We'll ask a few questions about the space, materials and timeline so the estimate is accurate from the start.",
  },
  {
    title: "Upfront Price, No Surprises",
    desc: "One clear number before any tile gets cut, based on the actual job — not a guess over the phone.",
  },
  {
    title: "The Work Gets Done Right",
    desc: "Our crew preps, sets and grouts the tile properly — level, square and waterproofed where it matters.",
  },
  {
    title: "A Space You're Proud Of",
    desc: "Clean lines, tight grout and a finished space that looks the way you pictured it. That's the whole point.",
  },
];

export const testimonials = [
  {
    name: "Michelle T.",
    area: "Worcester, MA",
    text: "Ruan's crew redid our whole bathroom floor and shower surround. They were upfront about the price from day one and the grout lines are still perfect a year later.",
  },
  {
    name: "Jason P.",
    area: "Shrewsbury, MA",
    text: "Had a cracked backsplash tile nobody wanted to touch for a 'small job.' RH Tile Works came out, matched the tile and fixed it in an afternoon. No runaround at all.",
  },
  {
    name: "Andrea L.",
    area: "Auburn, MA",
    text: "They installed new flooring tile through our kitchen and mudroom, showed up on time both days, and left the place spotless. Way better experience than the last contractor we hired.",
  },
];

export const areas = [
  "Worcester",
  "Shrewsbury",
  "Auburn",
  "Millbury",
  "Grafton",
  "Holden",
  "Leicester",
  "West Boylston",
  "Northborough",
  "Boylston",
  "Sutton",
  "Paxton",
  "Cherry Valley",
  "Rutland",
];

export const faqs = [
  {
    q: "Do you handle small repairs, or just full installations?",
    a: "Both. We do full bathroom, kitchen and floor tile installations, and we also handle small repairs — a cracked tile, a loose corner, or a tired grout line. Whatever the size, message us and we'll take a look.",
  },
  {
    q: "How fast can you get someone out for an estimate?",
    a: "Most estimates are scheduled within the week. Message us with a few photos and the rooms involved, and we'll give you a real timeline — not a runaround.",
  },
  {
    q: "Do you give a price before starting the work?",
    a: "Always. You'll get a clear, upfront estimate before any tile is cut or removed — no surprise numbers once the job is underway.",
  },
  {
    q: "What kind of tile work do you do?",
    a: "Bathroom tile, kitchen backsplashes, flooring, shower and tub surrounds, tile repair and regrouting, and commercial tile installation — porcelain, ceramic and natural stone.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Message us on Facebook with your project details and a few photos, and we'll get back to you with a free, no-pressure estimate.",
  },
  {
    q: "Is there a job that's too small for you to take on?",
    a: "Not usually. A single cracked tile or a small regrout is a normal call for us — we don't require a full remodel to schedule a visit.",
  },
  {
    q: "Do you handle waterproofing for showers and tub surrounds?",
    a: "Yes. Shower and tub surrounds are properly waterproofed and sloped before any tile goes on, so they hold up long-term instead of failing behind the wall.",
  },
  {
    q: "Do you handle residential and commercial jobs?",
    a: "We do. From a homeowner's bathroom remodel to a commercial office or retail space, we schedule around your timeline and handle both.",
  },
];

export const gallery = [
  { img: "/images/bathroom-tile.jpg", title: "Bathroom tile installation" },
  { img: "/images/kitchen-backsplash.jpg", title: "Kitchen backsplash" },
  { img: "/images/flooring-tile.jpg", title: "Flooring tile" },
  { img: "/images/shower-surround.jpg", title: "Shower & tub surrounds" },
  { img: "/images/tile-repair.jpg", title: "Tile repair & regrouting" },
  { img: "/images/commercial-tile.jpg", title: "Commercial tile work" },
  { img: "/images/bathroom-tile.jpg", title: "Residential & commercial jobs" },
  { img: "/images/kitchen-backsplash.jpg", title: "Every space, done right" },
];
