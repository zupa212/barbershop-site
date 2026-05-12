export type SeoPage = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  image?: string;
};

type LocationKey = "panorama" | "thermi" | "kalamaria";

type OpeningHours = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

type BusinessLocation = {
  key: LocationKey;
  name: string;
  path: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: OpeningHours[];
  image: string;
  sameAs: string[];
};

type HairNailsSalon = {
  name: string;
  path: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: OpeningHours[];
  image: string;
  logo: string;
  sameAs: string[];
};

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://www.kingsbarbershop.gr"
).replace(/\/$/, "");

export const officialInstagramUrl =
  "https://www.instagram.com/kings_barbershop_official/";

export const siteConfig = {
  name: "King's Barbershop",
  alternateName: "Kingsbarbershop",
  locale: "el_GR",
  author: "King's Barbershop",
  logo: "/uploads/8ab1f84b-2d00-49d8-b59d-7340c4b75f78.png",
  defaultImage: "/uploads/3bb4c8fb-d5ca-4c2d-a111-376820b1103e.png",
  sameAs: [officialInstagramUrl, "https://www.tiktok.com/@barbershop.kings"],
};

export const hairNailsSalon: HairNailsSalon = {
  name: "King's Hair and Nails Salon Πανόραμα",
  path: "/kings-hair-and-nails-panorama",
  telephone: "+302310345055",
  address: {
    streetAddress: "Αγίου Γεωργίου 2",
    addressLocality: "Πανόραμα",
    addressRegion: "Θεσσαλονίκη",
    postalCode: "55236",
    addressCountry: "GR",
  },
  openingHoursSpecification: [
    {
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  image: "/uploads/kings-hair-nails-logo.svg",
  logo: "/uploads/kings-hair-nails-logo.svg",
  sameAs: [officialInstagramUrl],
};

export const businessLocations: Record<LocationKey, BusinessLocation> = {
  panorama: {
    key: "panorama",
    name: "King's Barbershop Πανόραμα",
    path: "/kings-barbershop-panorama",
    telephone: "+302310340470",
    address: {
      streetAddress: "Βενιζέλου 12",
      addressLocality: "Πανόραμα",
      addressRegion: "Θεσσαλονίκη",
      postalCode: "55236",
      addressCountry: "GR",
    },
    geo: {
      latitude: 40.6282553,
      longitude: 23.022533,
    },
    openingHoursSpecification: [
      {
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    image: "/uploads/a2dc0838-660c-4427-b7d2-0f7b43aac5f9.png",
    sameAs: [officialInstagramUrl],
  },
  thermi: {
    key: "thermi",
    name: "King's Barbershop Θέρμη",
    path: "/kings-barbershop-thermi",
    telephone: "+302310464749",
    address: {
      streetAddress: "Καραολή και Δημητρίου 4, Εμπορικό LA PIAZZA",
      addressLocality: "Θέρμη",
      addressRegion: "Θεσσαλονίκη",
      postalCode: "57001",
      addressCountry: "GR",
    },
    geo: {
      latitude: 40.5613927,
      longitude: 23.0043652,
    },
    openingHoursSpecification: [
      {
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    image: "/uploads/78bcdd7e-cad9-4335-98ca-c30c34837c71.png",
    sameAs: [officialInstagramUrl],
  },
  kalamaria: {
    key: "kalamaria",
    name: "King's Barbershop Καλαμαριά",
    path: "/kings-barbershop-kalamaria",
    telephone: "+302310404067",
    address: {
      streetAddress: "Κοτυώρων 37",
      addressLocality: "Καλαμαριά",
      addressRegion: "Θεσσαλονίκη",
      postalCode: "55131",
      addressCountry: "GR",
    },
    geo: {
      latitude: 40.5828,
      longitude: 22.9507,
    },
    openingHoursSpecification: [
      {
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    image: "/uploads/kalamaria-shop-4.jpg",
    sameAs: [officialInstagramUrl],
  },
};

export const seoPages = {
  home: {
    title: "King's Barbershop Θεσσαλονίκη | Κούρεμα & Περιποίηση Γενειάδας",
    description:
      "Premium barbershop στη Θεσσαλονίκη για ανδρικό κούρεμα, fade, περιποίηση γενειάδας και hot towel shave σε Πανόραμα, Θέρμη και Καλαμαριά.",
    path: "/",
    keywords: [
      "barbershop Θεσσαλονίκη",
      "κουρείο Θεσσαλονίκη",
      "ανδρικό κούρεμα Θεσσαλονίκη",
      "περιποίηση γενειάδας",
      "Kingsbarbershop",
      "King's Barbershop",
    ],
  },
  panorama: {
    title: "King's Barbershop Πανόραμα | Ανδρικό Κούρεμα & Beard Grooming",
    description:
      "Κλείστε ραντεβού στο King's Barbershop Πανόραμα για premium ανδρικό κούρεμα, fade, ξύρισμα και περιποίηση γενειάδας στη Θεσσαλονίκη.",
    path: "/kings-barbershop-panorama",
    keywords: [
      "barbershop Πανόραμα",
      "κουρείο Πανόραμα",
      "κούρεμα Πανόραμα",
      "King's Barbershop Πανόραμα",
    ],
    image: businessLocations.panorama.image,
  },
  thermi: {
    title: "King's Barbershop Θέρμη | Premium Barber Services",
    description:
      "Το King's Barbershop Θέρμη προσφέρει επαγγελματικό κούρεμα, fade, grooming και περιποίηση γενειάδας από έμπειρους barbers.",
    path: "/kings-barbershop-thermi",
    keywords: [
      "barbershop Θέρμη",
      "κουρείο Θέρμη",
      "κούρεμα Θέρμη",
      "King's Barbershop Θέρμη",
    ],
    image: businessLocations.thermi.image,
  },
  kalamaria: {
    title: "King's Barbershop Καλαμαριά | Κούρεμα & Περιποίηση Ανδρών",
    description:
      "Επισκεφθείτε το King's Barbershop Καλαμαριά για σύγχρονο ανδρικό κούρεμα, fade, beard grooming και premium υπηρεσίες περιποίησης.",
    path: "/kings-barbershop-kalamaria",
    keywords: [
      "barbershop Καλαμαριά",
      "κουρείο Καλαμαριά",
      "κούρεμα Καλαμαριά",
      "King's Barbershop Καλαμαριά",
    ],
    image: businessLocations.kalamaria.image,
  },
  hairNails: {
    title:
      "King's Hair and Nails Salon Πανόραμα | Κομμωτήριο & Νύχια Θεσσαλονίκη",
    description:
      "Γυναικείο κομμωτήριο και nail salon στο Πανόραμα Θεσσαλονίκης. Κούρεμα, βαφή, ανταύγειες, χτένισμα, manicure, pedicure και ημιμόνιμο. Ραντεβού στο 2310345055, Αγίου Γεωργίου 2.",
    path: "/kings-hair-and-nails-panorama",
    keywords: [
      "κομμωτήριο Πανόραμα",
      "γυναικείο κομμωτήριο Πανόραμα",
      "νύχια Πανόραμα",
      "nail salon Πανόραμα",
      "manicure Πανόραμα",
      "pedicure Πανόραμα",
      "ημιμόνιμο Πανόραμα",
      "βαφή μαλλιών Πανόραμα",
      "ανταύγειες Πανόραμα",
      "χτένισμα Πανόραμα",
      "hair and nails Πανόραμα",
      "γυναικεία περιποίηση Πανόραμα",
      "salon Πανόραμα Θεσσαλονίκης",
      "κομμωτήριο Θεσσαλονίκη",
      "κομμωτήριο Πυλαία",
      "νύχια Πυλαία",
      "κομμωτήριο κοντά μου Πανόραμα",
      "King's Hair and Nails Salon",
      "Kings Hair and Nails Πανόραμα",
    ],
    image: hairNailsSalon.image,
  },
  franchise: {
    title: "King's Barbershop Franchise | Ευκαιρίες Συνεργασίας στην Ελλάδα",
    description:
      "Γίνετε franchise partner του King's Barbershop και ανοίξτε το δικό σας premium barbershop με υποστήριξη, τεχνογνωσία και δυνατό brand.",
    path: "/franchise",
    keywords: [
      "barbershop franchise",
      "franchise Ελλάδα",
      "King's Barbershop franchise",
      "επένδυση barbershop",
    ],
    image: "/uploads/a2dc0838-660c-4427-b7d2-0f7b43aac5f9.png",
  },
  blog: {
    title: "King's Barbershop Blog | Συμβουλές για Κούρεμα & Grooming",
    description:
      "Άρθρα και πρακτικές συμβουλές από την ομάδα του King's Barbershop για ανδρικά κουρέματα, γενειάδα, styling και περιποίηση μαλλιών.",
    path: "/blog",
    keywords: [
      "barber blog",
      "συμβουλές κουρέματος",
      "περιποίηση γενειάδας",
      "ανδρικά κουρέματα",
    ],
  },
} satisfies Record<string, SeoPage>;

export const toAbsoluteUrl = (path = "/") => {
  if (path.startsWith("http")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
};

export const buildOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: toAbsoluteUrl(siteConfig.logo),
  },
  image: toAbsoluteUrl(siteConfig.defaultImage),
  sameAs: siteConfig.sameAs,
});

export const buildWebSiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: siteConfig.name,
  inLanguage: "el-GR",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
});

export const buildLocalBusinessSchema = (location: BusinessLocation) => ({
  "@type": "BarberShop",
  "@id": `${toAbsoluteUrl(location.path)}#barbershop`,
  name: location.name,
  url: toAbsoluteUrl(location.path),
  telephone: location.telephone,
  image: toAbsoluteUrl(location.image),
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    ...location.address,
  },
  geo: {
    "@type": "GeoCoordinates",
    ...location.geo,
  },
  openingHoursSpecification: location.openingHoursSpecification.map((hours) => ({
    "@type": "OpeningHoursSpecification",
    ...hours,
  })),
  parentOrganization: {
    "@id": `${SITE_URL}/#organization`,
  },
  sameAs: location.sameAs,
});

export const buildHairNailsSalonSchema = () => ({
  "@type": "BeautySalon",
  "@id": `${toAbsoluteUrl(hairNailsSalon.path)}#beautysalon`,
  name: hairNailsSalon.name,
  url: toAbsoluteUrl(hairNailsSalon.path),
  telephone: hairNailsSalon.telephone,
  image: toAbsoluteUrl(hairNailsSalon.image),
  logo: toAbsoluteUrl(hairNailsSalon.logo),
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    ...hairNailsSalon.address,
  },
  ...(hairNailsSalon.geo
    ? {
        geo: {
          "@type": "GeoCoordinates",
          ...hairNailsSalon.geo,
        },
      }
    : {}),
  openingHoursSpecification: hairNailsSalon.openingHoursSpecification.map(
    (hours) => ({
      "@type": "OpeningHoursSpecification",
      ...hours,
    })
  ),
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Γυναικείο κούρεμα και χτένισμα",
        serviceType: "Hair styling, haircut and blow-dry",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Βαφή μαλλιών και ανταύγειες",
        serviceType: "Hair color, highlights and balayage",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Θεραπείες μαλλιών",
        serviceType: "Hair treatments, keratin and care",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Manicure και ημιμόνιμο",
        serviceType: "Manicure and gel polish",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Pedicure και περιποίηση άκρων",
        serviceType: "Pedicure and foot care",
      },
    },
  ],
  areaServed: [
    { "@type": "Place", name: "Πανόραμα" },
    { "@type": "Place", name: "Πυλαία" },
    { "@type": "Place", name: "Θέρμη" },
    { "@type": "Place", name: "Θεσσαλονίκη" },
  ],
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=Αγίου+Γεωργίου+2+Πανόραμα+55236",
  priceCurrency: "EUR",
  parentOrganization: {
    "@id": `${SITE_URL}/#organization`,
  },
  sameAs: hairNailsSalon.sameAs,
});

export const buildFaqSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const hairNailsFaqs = [
  {
    question:
      "Πού βρίσκεται το King's Hair and Nails Salon στο Πανόραμα;",
    answer:
      "Βρισκόμαστε στην Αγίου Γεωργίου 2, Πανόραμα Θεσσαλονίκης 55236, σε εύκολα προσβάσιμο σημείο για κατοίκους Πανοράματος, Πυλαίας και Θέρμης.",
  },
  {
    question: "Ποιο είναι το ωράριο λειτουργίας του salon;",
    answer:
      "Λειτουργούμε Τρίτη έως Σάββατο 09:00 - 17:00. Κυριακή και Δευτέρα παραμένουμε κλειστά. Μπορείτε να κλείσετε ραντεβού στο 2310345055.",
  },
  {
    question:
      "Τι υπηρεσίες προσφέρει το King's Hair and Nails Salon;",
    answer:
      "Προσφέρουμε γυναικείο κούρεμα, βαφή, ανταύγειες, χτένισμα, θεραπείες μαλλιών, manicure, pedicure και ημιμόνιμο σε ένα premium γυναικείο salon στο Πανόραμα.",
  },
  {
    question: "Πώς κλείνω ραντεβού στο salon στο Πανόραμα;",
    answer:
      "Καλέστε στο 2310345055 για να κλείσετε ραντεβού για μαλλιά ή νύχια στο King's Hair and Nails Salon, Αγίου Γεωργίου 2, Πανόραμα.",
  },
];

export const buildBreadcrumbSchema = (
  items: Array<{ name: string; path: string }>
) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path),
  })),
});

export const buildHomeSchema = () => [
  buildOrganizationSchema(),
  buildWebSiteSchema(),
  ...Object.values(businessLocations).map(buildLocalBusinessSchema),
  buildHairNailsSalonSchema(),
];

export const buildLocationPageSchema = (locationKey: LocationKey) => {
  const location = businessLocations[locationKey];

  return [
    buildOrganizationSchema(),
    buildLocalBusinessSchema(location),
    buildBreadcrumbSchema([
      { name: "Αρχική", path: "/" },
      { name: location.name, path: location.path },
    ]),
  ];
};

export const buildHairNailsPageSchema = () => [
  buildOrganizationSchema(),
  buildHairNailsSalonSchema(),
  buildBreadcrumbSchema([
    { name: "Αρχική", path: "/" },
    { name: hairNailsSalon.name, path: hairNailsSalon.path },
  ]),
  buildFaqSchema(hairNailsFaqs),
];

export const buildArticleSchema = (post: {
  title: string;
  excerpt: string;
  id: string;
  date: string;
  image?: string;
}) => ({
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  image: post.image ? toAbsoluteUrl(post.image) : toAbsoluteUrl(siteConfig.defaultImage),
  datePublished: post.date,
  dateModified: post.date,
  author: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  mainEntityOfPage: toAbsoluteUrl(`/blog/${post.id}`),
});
