export type QuoteImageConfig = {
  src?: string | null;
  alt: string;
  placeholderLabel: string;
};

export type IncludedItem = {
  id: string;
  label: string;
  detail?: string;
};

export type VisualDirection = {
  id: string;
  title: string;
  description: string;
  details: string[];
  image: QuoteImageConfig;
};

export type PricingItem = {
  id: string;
  title: string;
  price: number;
  priceLabel: string;
  description: string;
};

export type StudioOption = {
  id: string;
  name: string;
  price?: number | null;
  priceLabel: string;
  description: string;
  setupNote: string;
};

export type AtheiaQuoteData = {
  title: string;
  intro: string;
  heroEyebrow: string;
  mainOffer: {
    duration: string;
    summary: string;
    supportingPoints: string[];
  };
  included: IncludedItem[];
  visualDirections: VisualDirection[];
  pricing: {
    baseShoot: PricingItem;
    advancedEdits: PricingItem;
  };
  studioSection: {
    title: string;
    description: string;
    setupHourNote: string;
    options: StudioOption[];
  };
  estimatedTotal: {
    title: string;
    description: string;
    formula: string[];
  };
  cta: {
    label: string;
    href: string;
    note: string;
    downloadLabel: string;
  };
};

export const atheiaQuoteData: AtheiaQuoteData = {
  title: "ATHEIA Brand Photoshoot",
  intro:
    "A complete brand-focused shoot designed to create premium content for website, social media, and campaigns.",
  heroEyebrow: "Brand Photoshoot Proposal",
  mainOffer: {
    duration: "2-hour brand photoshoot",
    summary:
      "This is a 2-hour brand photoshoot built for premium brand storytelling, Shopify-ready assets, and campaign content.",
    supportingPoints: [
      "2 photographers",
      "Minimum 2 models",
      "1–2 locations depending on concept",
      "Lifestyle shots",
      "Product-focused shots",
      "Detail and close-up shots",
      "Standard editing included"
    ]
  },
  included: [
    { id: "duration", label: "2-hour photoshoot" },
    { id: "photographers", label: "2 photographers" },
    { id: "models", label: "Minimum 2 models" },
    { id: "locations", label: "1–2 locations" },
    { id: "coverage", label: "Lifestyle + product + detail shots" },
    { id: "editing", label: "Standard editing included" }
  ],
  visualDirections: [
    {
      id: "cinematic-street",
      title: "Cinematic Street",
      description: "Urban, minimal, timeless presence.",
      details: [
        "Street photography vibe with timeless framing",
        "Slightly retro influence with calm dominance",
        "Strong posture and lifestyle-led brand identity",
        "Natural light only"
      ],
      image: {
        alt: "Placeholder for Cinematic Street visual direction",
        placeholderLabel: "Cinematic street image placeholder"
      }
    },
    {
      id: "studio-precision",
      title: "Studio Precision",
      description: "Clean product visuals for Shopify.",
      details: [
        "Studio environment with professional lighting",
        "Clean e-commerce images with product clarity",
        "Detail shots with controlled background work",
        "Built for website, Shopify, and campaigns"
      ],
      image: {
        alt: "Placeholder for Studio Precision visual direction",
        placeholderLabel: "Studio image placeholder"
      }
    },
    {
      id: "performance-environment",
      title: "Performance Environment",
      description: "Natural light + athletic lifestyle.",
      details: [
        "Sports park or outdoor athletic setting",
        "Early morning or golden hour timing",
        "Brand in motion with premium performance energy",
        "Active, controlled, and natural-light only"
      ],
      image: {
        alt: "Placeholder for Performance Environment visual direction",
        placeholderLabel: "Performance image placeholder"
      }
    }
  ],
  pricing: {
    baseShoot: {
      id: "base-shoot",
      title: "Base Shoot",
      price: 550,
      priceLabel: "$550",
      description: "2-hour shoot + standard editing included"
    },
    advancedEdits: {
      id: "advanced-edits",
      title: "Advanced Edits",
      price: 220,
      priceLabel: "+$220",
      description: "40–50 selected images with detailed retouching"
    }
  },
  studioSection: {
    title: "Optional Studio Add-On",
    description:
      "Studio rental is not included in the base price. Placeholder pricing is intentionally editable so exact rental rates can be updated later.",
    setupHourNote:
      "Studio shoots require +1 extra setup hour for lighting and prep before the shoot begins.",
    options: [
      {
        id: "studio-124",
        name: "The Studio 124",
        price: null,
        priceLabel: "TBD",
        description:
          "Premium editable studio option with placeholder pricing for later confirmation.",
        setupNote: "+1 hour setup time for lighting"
      },
      {
        id: "visuals",
        name: "Visuals",
        price: null,
        priceLabel: "TBD",
        description:
          "Controlled studio environment with placeholder pricing for later confirmation.",
        setupNote: "+1 hour setup time for lighting"
      }
    ]
  },
  estimatedTotal: {
    title: "Estimated Total",
    description:
      "A clear working estimate so the client can understand the base rate, add-ons, and where studio costs change the final number.",
    formula: [
      "Base shoot: $550",
      "Advanced edits: +$220 if selected",
      "Studio rental: optional / varies depending on studio",
      "Studio setup hour: additional production time required"
    ]
  },
  cta: {
    label: "Pre-Book Photoshoot",
    href: "#",
    note: "Final pricing may vary depending on studio choice, production needs, and selected add-ons.",
    downloadLabel: "Download PDF"
  }
};

