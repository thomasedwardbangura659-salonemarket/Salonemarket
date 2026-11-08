export type CategorySlug =
  | "electronics"
  | "vehicles"
  | "property"
  | "fashion"
  | "home-garden"
  | "services"
  | "agriculture"
  | "jobs";

export type Category = {
  slug: CategorySlug;
  name: string;
  tagline: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "electronics",
    name: "Electronics",
    tagline: "Phones, laptops & more",
    description:
      "Phones, laptops, audio and accessories from trusted sellers across the country.",
  },
  {
    slug: "vehicles",
    name: "Vehicles",
    tagline: "Cars, bikes & parts",
    description:
      "Cars, motorbikes, pickups and spare parts for work and family life.",
  },
  {
    slug: "property",
    name: "Property",
    tagline: "Rent, sale & land",
    description:
      "Homes, apartments and land for rent or sale in Sierra Leone's growing towns.",
  },
  {
    slug: "fashion",
    name: "Fashion",
    tagline: "Clothing & accessories",
    description: "Clothing, footwear and accessories — new and pre-loved.",
  },
  {
    slug: "home-garden",
    name: "Home & Garden",
    tagline: "Furniture & appliances",
    description: "Furniture, appliances and home essentials for every household.",
  },
  {
    slug: "services",
    name: "Services",
    tagline: "Repair, cleaning & more",
    description: "Repairs, tailoring, cleaning and professional services near you.",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    tagline: "Farm produce & tools",
    description: "Farm produce, seeds, tools and supplies from local producers.",
  },
  {
    slug: "jobs",
    name: "Jobs",
    tagline: "Full-time & part-time",
    description: "Full-time, part-time and freelance opportunities across the country.",
  },
];

export type ProductImageKind =
  | "phone"
  | "laptop"
  | "car"
  | "motorbike"
  | "house"
  | "land"
  | "dress"
  | "sneakers"
  | "fridge"
  | "sofa"
  | "solar"
  | "generator"
  | "sewing"
  | "sack"
  | "cocoa"
  | "desk"
  | "briefcase";

export type ProductCondition = "New" | "Used" | "Refurbished" | "Service" | "Job";

export type Seller = {
  name: string;
  type: "Individual" | "Business";
  rating: number;
};

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  priceUnit?: string;
  condition: ProductCondition;
  city: string;
  area?: string;
  description: string;
  features: string[];
  keywords: string[];
  seller: Seller;
  postedAt: string;
  featured?: boolean;
  image: ProductImageKind;
  accent?: string;
};

export const products: Product[] = [
  {
    slug: "iphone-13-128gb",
    name: "Apple iPhone 13 — 128GB",
    category: "electronics",
    price: 9500,
    condition: "Used",
    city: "Freetown",
    area: "Aberdeen",
    description:
      "Unlocked iPhone 13 in midnight with 128GB storage. Battery health is 89%, Face ID and both cameras work perfectly, and there are no cracks on the screen.",
    features: [
      "128GB storage",
      "Battery health 89%",
      "Face ID & dual camera tested",
      "Charger and case included",
    ],
    keywords: ["iphone", "apple", "phone", "smartphone", "128gb", "unlocked"],
    seller: { name: "Mohamed Kamara", type: "Individual", rating: 4.8 },
    postedAt: "2026-11-04",
    featured: true,
    image: "phone",
    accent: "#1f2937",
  },
  {
    slug: "dell-latitude-7420",
    name: "Dell Latitude 7420 Laptop",
    category: "electronics",
    price: 7850,
    condition: "Used",
    city: "Freetown",
    area: "Wilberforce",
    description:
      "Business-grade Dell Latitude with an 11th-gen Core i5, 16GB RAM and a fast 512GB NVMe drive. Windows 11 Pro installed and battery lasts around six hours.",
    features: [
      'Intel Core i5 11th gen',
      "16GB RAM / 512GB SSD",
      '14" full-HD display',
      "Backlit keyboard, Windows 11 Pro",
    ],
    keywords: ["dell", "laptop", "computer", "i5", "windows"],
    seller: { name: "Fatmata's Tech Hub", type: "Business", rating: 4.9 },
    postedAt: "2026-11-01",
    featured: true,
    image: "laptop",
    accent: "#0f172a",
  },
  {
    slug: "samsung-galaxy-a54",
    name: "Samsung Galaxy A54 5G",
    category: "electronics",
    price: 4200,
    condition: "New",
    city: "Freetown",
    area: "Lumley",
    description:
      "Brand new sealed Samsung Galaxy A54 with a 6.4-inch AMOLED display and 128GB storage. Dual SIM, one-year shop warranty and free screen protector.",
    features: [
      '6.4" Super AMOLED display',
      "128GB storage / 8GB RAM",
      "Dual SIM, 5G ready",
      "Sealed box with warranty",
    ],
    keywords: ["samsung", "galaxy", "phone", "smartphone", "5g", "android"],
    seller: { name: "Salone Gadgets", type: "Business", rating: 4.7 },
    postedAt: "2026-11-05",
    image: "phone",
    accent: "#334155",
  },
  {
    slug: "toyota-corolla-2012",
    name: "Toyota Corolla 2012",
    category: "vehicles",
    price: 185000,
    condition: "Used",
    city: "Freetown",
    area: "Kissy",
    description:
      "Well-maintained 2012 Corolla with a 1.8L petrol engine and automatic gearbox. Air conditioning is cold, tyres are new and full service history is available.",
    features: [
      "1.8L petrol, automatic",
      "128,000 km on the clock",
      "Cold air conditioning",
      "Complete service history",
    ],
    keywords: ["toyota", "corolla", "car", "sedan", "automatic"],
    seller: { name: "Ibrahim Sesay", type: "Individual", rating: 4.6 },
    postedAt: "2026-10-28",
    featured: true,
    image: "car",
    accent: "#64748b",
  },
  {
    slug: "toyota-hilux-2015",
    name: "Toyota Hilux 2015 Double Cab",
    category: "vehicles",
    price: 420000,
    condition: "Used",
    city: "Makeni",
    description:
      "Strong 2015 Hilux double cab with 2.5L diesel engine and four-wheel drive. Recently fitted with new tyres and a bed liner, ready for farm or site work.",
    features: [
      "2.5L diesel, 4x4",
      "Double cab pickup",
      "New tyres all round",
      "160,000 km, papers complete",
    ],
    keywords: ["toyota", "hilux", "pickup", "truck", "4x4", "diesel"],
    seller: { name: "Northern Motors", type: "Business", rating: 4.5 },
    postedAt: "2026-10-20",
    image: "car",
    accent: "#475569",
  },
  {
    slug: "bajaj-boxer-150",
    name: "Bajaj Boxer 150 Motorbike",
    category: "vehicles",
    price: 27500,
    condition: "Used",
    city: "Koidu",
    description:
      "Reliable Bajaj Boxer 150 used for daily transport. Engine runs smoothly, new battery fitted this month, and all ownership papers are complete.",
    features: [
      "150cc petrol engine",
      "18,000 km on the clock",
      "New battery",
      "Complete ownership papers",
    ],
    keywords: ["bajaj", "boxer", "motorbike", "bike", "okada"],
    seller: { name: "Koidu Bike Centre", type: "Business", rating: 4.4 },
    postedAt: "2026-11-03",
    image: "motorbike",
    accent: "#b91c1c",
  },
  {
    slug: "three-bedroom-house-bo",
    name: "3-Bedroom House in Bo",
    category: "property",
    price: 650000,
    condition: "Used",
    city: "Bo",
    description:
      "Fenced family home on a quarter-acre plot with three bedrooms and two bathrooms. Includes a borehole, solar backup and space for a garden.",
    features: [
      "3 bedrooms, 2 bathrooms",
      "Quarter-acre fenced plot",
      "Borehole and solar backup",
      "Paved access road",
    ],
    keywords: ["house", "home", "property", "bo", "family"],
    seller: { name: "Koroma Properties", type: "Business", rating: 4.8 },
    postedAt: "2026-10-15",
    image: "house",
    accent: "#15803d",
  },
  {
    slug: "two-bedroom-apartment-freetown",
    name: "2-Bedroom Apartment for Rent",
    category: "property",
    price: 6500,
    priceUnit: "/ month",
    condition: "New",
    city: "Freetown",
    area: "Lumley",
    description:
      "Furnished two-bedroom apartment a short walk from Lumley beach. Rent includes 24-hour security, a water tank and a standby generator.",
    features: [
      "Fully furnished",
      "24-hour security",
      "Water tank & standby generator",
      "Beach access nearby",
    ],
    keywords: ["apartment", "rent", "flat", "furnished", "lumley"],
    seller: { name: "Lumley Homes", type: "Business", rating: 4.7 },
    postedAt: "2026-11-06",
    image: "house",
    accent: "#0d9488",
  },
  {
    slug: "land-plot-waterloo",
    name: "Half-Acre Residential Plot",
    category: "property",
    price: 95000,
    condition: "New",
    city: "Waterloo",
    description:
      "Surveyed half-acre residential plot with town hall papers in order. Tarred road access and electricity lines are already on the street.",
    features: [
      "Half-acre surveyed plot",
      "Town hall papers available",
      "Tarred road access",
      "Electricity on the street",
    ],
    keywords: ["land", "plot", "waterloo", "residential", "property"],
    seller: { name: "Aminata Bangura", type: "Individual", rating: 4.3 },
    postedAt: "2026-10-30",
    image: "land",
    accent: "#4d7c0f",
  },
  {
    slug: "ankara-dress",
    name: "Handmade Ankara Dress",
    category: "fashion",
    price: 850,
    condition: "New",
    city: "Freetown",
    area: "Central Freetown",
    description:
      "Hand-tailored Ankara dress made from locally sourced wax print fabric. Available in custom sizes with a three-day turnaround.",
    features: [
      "Locally sourced Ankara fabric",
      "Made to measure",
      "Three-day turnaround",
      "Machine washable",
    ],
    keywords: ["dress", "ankara", "fashion", "clothing", "tailored", "women"],
    seller: { name: "Adama's Stitches", type: "Business", rating: 4.9 },
    postedAt: "2026-11-02",
    featured: true,
    image: "dress",
    accent: "#b45309",
  },
  {
    slug: "nike-air-force-1",
    name: "Nike Air Force 1 Sneakers",
    category: "fashion",
    price: 1250,
    condition: "Used",
    city: "Freetown",
    area: "Lumley",
    description:
      "Original Nike Air Force 1 in size 43, worn only twice indoors. No creasing on the toe box and the sole is still clean.",
    features: [
      "Original Nike pair",
      "Size 43 (UK 9)",
      "Worn twice, excellent condition",
      "Original box included",
    ],
    keywords: ["nike", "sneakers", "shoes", "fashion", "air force"],
    seller: { name: "Sneaker Point SL", type: "Business", rating: 4.6 },
    postedAt: "2026-10-29",
    image: "sneakers",
    accent: "#334155",
  },
  {
    slug: "lg-double-door-fridge",
    name: "LG Double-Door Refrigerator",
    category: "home-garden",
    price: 5600,
    condition: "Used",
    city: "Freetown",
    area: "Kissy",
    description:
      "260-litre LG frost-free refrigerator in good working order. Freezer holds temperature well and the unit is energy-rated A+.",
    features: [
      "260L capacity",
      "Frost-free double door",
      "Energy rating A+",
      "Recently serviced",
    ],
    keywords: ["fridge", "refrigerator", "lg", "appliance", "kitchen"],
    seller: { name: "Cool Appliances SL", type: "Business", rating: 4.5 },
    postedAt: "2026-10-25",
    image: "fridge",
    accent: "#64748b",
  },
  {
    slug: "three-seater-fabric-sofa",
    name: "3-Seater Fabric Sofa",
    category: "home-garden",
    price: 4800,
    condition: "New",
    city: "Freetown",
    area: "Wilberforce",
    description:
      "Comfortable three-seater sofa with a hardwood frame and removable, washable covers. Cushions are high-density foam for everyday use.",
    features: [
      "Hardwood frame",
      "Removable washable covers",
      "High-density foam cushions",
      "Delivery within Freetown",
    ],
    keywords: ["sofa", "furniture", "couch", "living room", "seating"],
    seller: { name: "Home Comfort SL", type: "Business", rating: 4.6 },
    postedAt: "2026-10-27",
    image: "sofa",
    accent: "#78716c",
  },
  {
    slug: "solar-home-kit-300w",
    name: "300W Solar Home Kit",
    category: "home-garden",
    price: 3900,
    condition: "New",
    city: "Makeni",
    description:
      "Complete solar kit with a 300W panel, 100Ah battery and inverter. Runs four LED bulbs, a fan and phone charging through the night.",
    features: [
      "300W solar panel",
      "100Ah deep-cycle battery",
      "Inverter and wiring included",
      "Installation guide provided",
    ],
    keywords: ["solar", "panel", "power", "inverter", "battery", "energy"],
    seller: { name: "GreenPower SL", type: "Business", rating: 4.8 },
    postedAt: "2026-11-01",
    image: "solar",
    accent: "#0e7490",
  },
  {
    slug: "generator-repair-service",
    name: "Generator Repair & Servicing",
    category: "services",
    price: 900,
    priceUnit: "/ service",
    condition: "Service",
    city: "Freetown",
    area: "Kissy",
    description:
      "On-site servicing, diagnostics and repairs for petrol and diesel generators. Price covers a standard service; parts are quoted separately.",
    features: [
      "Petrol & diesel generators",
      "On-site diagnostics",
      "Genuine spare parts",
      "Same-week appointments",
    ],
    keywords: ["generator", "repair", "service", "maintenance", "technician"],
    seller: { name: "FixIt Salone", type: "Business", rating: 4.7 },
    postedAt: "2026-10-31",
    image: "generator",
    accent: "#b45309",
  },
  {
    slug: "custom-tailoring-service",
    name: "Custom Tailoring Service",
    category: "services",
    price: 450,
    priceUnit: "/ outfit",
    condition: "Service",
    city: "Kenema",
    description:
      "Bespoke tailoring for everyday wear, bridal outfits and traditional attire. Measurements taken at the shop with a three-day turnaround.",
    features: [
      "Made-to-measure outfits",
      "Bridal & traditional wear",
      "Three-day turnaround",
      "Fabric sourcing available",
    ],
    keywords: ["tailor", "tailoring", "sewing", "outfit", "service", "fashion"],
    seller: { name: "Kenema Tailors", type: "Business", rating: 4.5 },
    postedAt: "2026-10-24",
    image: "sewing",
    accent: "#0f766e",
  },
  {
    slug: "local-rice-50kg",
    name: "Local Rice — 50kg Bag",
    category: "agriculture",
    price: 1050,
    condition: "New",
    city: "Bo",
    description:
      "Freshly harvested, cleaned local rice in a 50kg bag. Milled this season and stored dry, with delivery available around Bo.",
    features: [
      "50kg bag",
      "Newly harvested",
      "Cleaned and stone-free",
      "Local delivery available",
    ],
    keywords: ["rice", "food", "grain", "farm", "produce", "50kg"],
    seller: { name: "Bo Farmers Co-op", type: "Business", rating: 4.6 },
    postedAt: "2026-11-05",
    image: "sack",
    accent: "#a16207",
  },
  {
    slug: "cocoa-beans-50kg",
    name: "Premium Cocoa Beans — 50kg",
    category: "agriculture",
    price: 2400,
    condition: "New",
    city: "Kenema",
    description:
      "Fermented and sun-dried cocoa beans from eastern Sierra Leone. Moisture tested and packed in 50kg bags ready for export buyers.",
    features: [
      "50kg export-ready bag",
      "Fermented and sun-dried",
      "Moisture tested",
      "Bulk orders available",
    ],
    keywords: ["cocoa", "beans", "export", "farm", "produce", "kenema"],
    seller: { name: "Eastern Agro Traders", type: "Business", rating: 4.4 },
    postedAt: "2026-10-22",
    image: "cocoa",
    accent: "#78350f",
  },
  {
    slug: "cassava-flour-50kg",
    name: "Cassava Flour — 50kg Bag",
    category: "agriculture",
    price: 620,
    condition: "New",
    city: "Port Loko",
    description:
      "Finely milled cassava flour from this season's harvest. Packed in 50kg bags and suitable for local food processing or resale.",
    features: [
      "50kg bag",
      "Finely milled",
      "This season's harvest",
      "Wholesale pricing available",
    ],
    keywords: ["cassava", "flour", "farm", "produce", "food"],
    seller: { name: "Port Loko Growers", type: "Business", rating: 4.3 },
    postedAt: "2026-10-26",
    image: "sack",
    accent: "#854d0e",
  },
  {
    slug: "freelance-graphic-designer",
    name: "Freelance Graphic Designer",
    category: "jobs",
    price: 4500,
    priceUnit: "/ month",
    condition: "Job",
    city: "Freetown",
    description:
      "Remote freelance role for a designer comfortable with branding, social media and print work. Portfolio required; flexible working hours.",
    features: [
      "Remote / flexible hours",
      "Branding and social media work",
      "Portfolio required",
      "Monthly retainer",
    ],
    keywords: ["job", "designer", "graphic", "remote", "freelance", "creative"],
    seller: { name: "BrightMedia SL", type: "Business", rating: 4.3 },
    postedAt: "2026-11-06",
    image: "desk",
    accent: "#334155",
  },
  {
    slug: "sales-assistant-freetown",
    name: "Sales Assistant — Freetown",
    category: "jobs",
    price: 2800,
    priceUnit: "/ month",
    condition: "Job",
    city: "Freetown",
    area: "Central Freetown",
    description:
      "Full-time sales assistant needed for a busy retail shop in central Freetown. Monday to Saturday, training provided and monthly sales bonus.",
    features: [
      "Full-time, Monday to Saturday",
      "Training provided",
      "Monthly sales bonus",
      "Start immediately",
    ],
    keywords: ["job", "sales", "retail", "assistant", "full-time"],
    seller: { name: "City Retail SL", type: "Business", rating: 4.2 },
    postedAt: "2026-11-03",
    image: "briefcase",
    accent: "#475569",
  },
];

export const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "newest", label: "Newest first" },
] as const;

export type SortOption = (typeof sortOptions)[number]["value"];

const categorySlugs = categories.map((c) => c.slug);

export function isCategorySlug(value: string): value is CategorySlug {
  return (categorySlugs as string[]).includes(value);
}

export function isSortOption(value: string): value is SortOption {
  return sortOptions.some((option) => option.value === value);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function categoryName(slug: CategorySlug): string {
  return getCategory(slug)?.name ?? slug;
}

export function formatPrice(price: number): string {
  return `Le ${price.toLocaleString("en-US")}`;
}

export function productLocation(product: Product): string {
  return product.area ? `${product.area}, ${product.city}` : product.city;
}

export function conditionLabel(condition: ProductCondition): string {
  return condition === "Job" ? "Job listing" : condition;
}

export function formatDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function cities(): string[] {
  return [...new Set(products.map((product) => product.city))].sort();
}

export function productCountsByCategory(): Record<CategorySlug, number> {
  const counts = Object.fromEntries(
    categories.map((category) => [category.slug, 0])
  ) as Record<CategorySlug, number>;
  for (const product of products) {
    counts[product.category] += 1;
  }
  return counts;
}

export type ProductFilters = {
  q?: string;
  category?: CategorySlug;
  city?: string;
  sort?: SortOption;
  featuredOnly?: boolean;
};

function searchTokens(value: string): string[] {
  return value.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

function termMatchesToken(term: string, token: string): boolean {
  return token === term || (term.length >= 2 && token.startsWith(term));
}

function matchesQuery(product: Product, query: string): boolean {
  const terms = searchTokens(query);
  if (terms.length === 0) return true;

  const name = product.name.toLowerCase();
  const tokens = searchTokens(
    [
      product.name,
      product.description,
      categoryName(product.category),
      product.city,
      product.area ?? "",
      conditionLabel(product.condition),
      ...product.keywords,
      ...product.features,
    ].join(" ")
  );

  return terms.every((term) => {
    // Word-boundary matching keeps "rice" from matching "price" while still
    // allowing prefixes such as "lapt" → "laptop".
    if (tokens.some((token) => termMatchesToken(term, token))) return true;
    // Partial matches inside a name stay useful for compounded names
    // such as "phone" → "iPhone", but only for reasonably long terms.
    return term.length >= 4 && name.includes(term);
  });
}

export function filterProducts({
  q = "",
  category,
  city,
  sort = "recommended",
  featuredOnly = false,
}: ProductFilters): Product[] {
  let result = products.filter((product) => {
    if (category && product.category !== category) return false;
    if (city && product.city !== city) return false;
    if (featuredOnly && !product.featured) return false;
    return matchesQuery(product, q.trim());
  });

  result = [...result];
  switch (sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      result.sort((a, b) => b.postedAt.localeCompare(a.postedAt));
      break;
    default:
      result.sort((a, b) => {
        if (Boolean(a.featured) !== Boolean(b.featured)) {
          return a.featured ? -1 : 1;
        }
        return b.postedAt.localeCompare(a.postedAt);
      });
  }

  return result;
}

export function relatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (candidate) =>
        candidate.slug !== product.slug && candidate.category === product.category
    )
    .slice(0, limit);
}
