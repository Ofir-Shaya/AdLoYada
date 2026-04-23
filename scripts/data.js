var moods = [
  {
    id: "comfort",
    emoji: "🫂",
    label: "Comfort food",
    tagline: "It's been a day. Feed the feeling.",
    color: "#C73E3A",
    cuisines: ["Lebanese", "Indian", "Italian"],
    dishes: [
      "Mansaf or a proper machboos",
      "Butter chicken + garlic naan (non-negotiable)",
      "Lasagna from anywhere that uses real bechamel",
      "Mixed grill with extra hummus and garlic sauce"
    ],
    platforms: ["talabat", "deliveroo"],
    dubaiTip: "Al Safadi in Karama is the answer. It's always the answer."
  },
  {
    id: "healthy",
    emoji: "🥗",
    label: "Healthy (but interesting)",
    tagline: "Your body's begging. Listen, but don't be boring.",
    color: "#9FB76B",
    cuisines: ["Mediterranean", "Japanese", "Lebanese"],
    dishes: [
      "Grilled halloumi salad with pomegranate",
      "Salmon sashimi + miso soup",
      "Fattoush + grilled chicken taouk",
      "Acai bowl if you're in that JBR mood"
    ],
    platforms: ["deliveroo", "noon"],
    dubaiTip: "Kcal, Right Bite, and SaladBoss dominate. Deliveroo has the full roster."
  },
  {
    id: "adventurous",
    emoji: "🎲",
    label: "Adventurous",
    tagline: "Eat something you can't pronounce.",
    color: "#F4A026",
    cuisines: ["Emirati", "Korean", "Ethiopian", "Filipino"],
    dishes: [
      "Harees or balaleet at an Emirati spot",
      "Korean army stew (budae jjigae) for the drama",
      "Ethiopian injera platter — eat with your hands, as god intended",
      "Sinigang from a Filipino spot in Satwa"
    ],
    platforms: ["talabat", "careem"],
    dubaiTip: "Deira and Satwa hide the best non-mainstream kitchens. Talabat actually indexes them."
  },
  {
    id: "latenight",
    emoji: "🌙",
    label: "Late night",
    tagline: "It's 2am. No judgment here.",
    color: "#14343B",
    cuisines: ["Shawarma", "Burgers", "Pakistani"],
    dishes: [
      "Chicken shawarma with extra toum",
      "Smash burger + loaded fries",
      "Paratha roll + chai",
      "Manakish zaatar — somehow always open"
    ],
    platforms: ["talabat", "careem", "keeta"],
    dubaiTip: "Allo Beirut and Operation:Falafel run past midnight. Karama never sleeps."
  },
  {
    id: "hangover",
    emoji: "🥴",
    label: "Hangover cure",
    tagline: "You've been punished enough. Let's fix this.",
    color: "#5C3A21",
    cuisines: ["Lebanese", "Indian", "American"],
    dishes: [
      "Foul medames + eggs + fresh bread (the holy trinity)",
      "Chicken biryani — grease is medicine",
      "Pancakes + bacon + a large anything cold",
      "Pho from a Vietnamese spot if you can find one"
    ],
    platforms: ["deliveroo", "talabat"],
    dubaiTip: "Tom&Serg, Common Grounds, or anything breakfast-all-day in Al Quoz."
  },
  {
    id: "impress",
    emoji: "💅",
    label: "Impress someone",
    tagline: "The date's at yours. Don't mess this up.",
    color: "#D4A24C",
    cuisines: ["Japanese", "Italian", "Steakhouse"],
    dishes: [
      "Omakase-style sushi platter",
      "Truffle pasta + a good burrata",
      "Wagyu from a proper DIFC steakhouse",
      "Dessert from Home Bakery, always Home Bakery"
    ],
    platforms: ["deliveroo", "noon"],
    dubaiTip: "Deliveroo Plus in DIFC and Downtown is where the fine-dining delivery lives."
  },
  {
    id: "broke",
    emoji: "💸",
    label: "Broke but hungry",
    tagline: "Payday's Friday. You've got AED 25. Let's work.",
    color: "#FF5C8A",
    cuisines: ["Pakistani", "Filipino", "Egyptian"],
    dishes: [
      "Karak + aloo paratha under AED 15",
      "Chicken mandi — feeds you for two meals",
      "Koshary (the carbs-on-carbs-on-carbs special)",
      "Zinger burger meal with the student code"
    ],
    platforms: ["talabat", "keeta"],
    dubaiTip: "Keeta's newer and aggressive on promos. Stack vouchers in Al Nahda and International City."
  },
  {
    id: "family",
    emoji: "👨‍👩‍👧‍👦",
    label: "Feeding the whole family",
    tagline: "Four adults, two kids, one vegetarian. Easy.",
    color: "#F4A026",
    cuisines: ["Indian", "Lebanese", "Pizza"],
    dishes: [
      "Family-size biryani + raita + kebabs",
      "Mixed grill platter + 3 kinds of mezze",
      "Two large pizzas + wings + a sad salad nobody eats",
      "Chinese banquet: sweet & sour, kung pao, fried rice"
    ],
    platforms: ["talabat", "noon"],
    dubaiTip: "Go for Bait Maryam or Al Fanar family portions — proper Bu Qtair vibes without the queue."
  },
  {
    id: "solo",
    emoji: "🧘",
    label: "Solo ritual",
    tagline: "Just you, the couch, and something perfect.",
    color: "#9FB76B",
    cuisines: ["Japanese", "Thai", "Korean"],
    dishes: [
      "Single-serve ramen — tonkotsu, non-negotiable",
      "Pad thai + spring rolls + Thai iced tea",
      "Bibimbap in the stone bowl",
      "A really good sandwich. Don't underestimate."
    ],
    platforms: ["deliveroo", "noon"],
    dubaiTip: "Marina and JLT have the best ramen radius. Kinoya delivers when it feels like it."
  }
];

var platforms = [
  {
    id: "talabat",
    name: "Talabat",
    color: "#FF5A00",
    bestFor: "The widest net. If it exists in Dubai, it's on Talabat.",
    deliveryTime: "25–50 min",
    vibe: "The reliable older sibling. Not flashy, just works.",
    strength: "Coverage across every neighborhood, including Deira and Al Qusais where others ghost.",
    weakness: "UI is busy. Too many banners.",
    priceTier: "$–$$$",
    url: "https://www.talabat.com"
  },
  {
    id: "deliveroo",
    name: "Deliveroo",
    color: "#00CCBC",
    bestFor: "Fine dining, healthy bowls, and anything premium.",
    deliveryTime: "20–40 min",
    vibe: "The one that dresses well for brunch. Slightly pricey, worth it.",
    strength: "Curated restaurant list, best UI, reliable in Downtown/Marina/DIFC.",
    weakness: "Thinner in older Dubai (Deira, Satwa). Delivery fees add up.",
    priceTier: "$$–$$$$",
    url: "https://www.deliveroo.ae"
  },
  {
    id: "noon",
    name: "Noon Food",
    color: "#FECC00",
    bestFor: "Promo stacking and Noon One members — genuinely cheap meals.",
    deliveryTime: "30–55 min",
    vibe: "The discount hunter's paradise. Yellow everywhere.",
    strength: "Aggressive discounts, free delivery for Noon One, groceries + food in one app.",
    weakness: "Restaurant catalog smaller than Talabat. ETAs optimistic.",
    priceTier: "$–$$",
    url: "https://www.noon.com/uae-en/food"
  },
  {
    id: "keeta",
    name: "Keeta",
    color: "#FF6B35",
    bestFor: "New kid aggression — deep discounts, zero-fee deliveries.",
    deliveryTime: "30–50 min",
    vibe: "Chinese underdog making noise. Meituan-backed, hungry for market share.",
    strength: "Ridiculous launch promos in Al Nahda, International City, Silicon Oasis.",
    weakness: "Coverage still expanding. Not citywide yet.",
    priceTier: "$",
    url: "https://www.keeta.com"
  },
  {
    id: "careem",
    name: "Careem Food",
    color: "#1DBF73",
    bestFor: "Super-app convenience — food, ride, bike, bills in one.",
    deliveryTime: "25–50 min",
    vibe: "The all-in-one. You already have the app anyway.",
    strength: "Careem Plus benefits, late-night coverage, decent Lebanese/Arabic catalog.",
    weakness: "Food catalog is a secondary feature, not a first-class experience.",
    priceTier: "$$",
    url: "https://www.careem.com/en-ae/food"
  }
];

var cuisines = [
  {
    id: "lebanese",
    name: "Lebanese",
    emoji: "🫒",
    personality: "The reliable group chat friend. Always there, always good, never wrong.",
    orderThis: "Mixed grill, fattoush, hummus beiruty, and never forget the toum.",
    bestAreas: "Karama, Jumeirah, JBR",
    platforms: ["talabat", "deliveroo", "careem"]
  },
  {
    id: "indian",
    name: "Indian",
    emoji: "🍛",
    personality: "Dubai's secret default. You think you want something else. You don't.",
    orderThis: "Butter chicken, dal makhani, garlic naan, biryani on Fridays.",
    bestAreas: "Bur Dubai, Karama, Business Bay",
    platforms: ["talabat", "noon", "deliveroo"]
  },
  {
    id: "pakistani",
    name: "Pakistani",
    emoji: "🔥",
    personality: "Flavor maximalist. Doesn't know the word 'mild'.",
    orderThis: "Nihari, haleem, seekh kebabs, chicken karahi, a bucket of naan.",
    bestAreas: "Al Quoz, Deira, International City",
    platforms: ["talabat", "keeta"]
  },
  {
    id: "japanese",
    name: "Japanese",
    emoji: "🍣",
    personality: "The one you save for special occasions. Or Tuesdays. No rules.",
    orderThis: "Salmon sashimi, tonkotsu ramen, agedashi tofu, a proper dorayaki.",
    bestAreas: "Marina, DIFC, JLT",
    platforms: ["deliveroo", "noon"]
  },
  {
    id: "italian",
    name: "Italian",
    emoji: "🍝",
    personality: "Hopeless romantic. Every dish wants to be eaten slowly.",
    orderThis: "Cacio e pepe, a proper Margherita, tiramisu that didn't come frozen.",
    bestAreas: "JBR, City Walk, DIFC",
    platforms: ["deliveroo", "talabat"]
  },
  {
    id: "emirati",
    name: "Emirati",
    emoji: "🐪",
    personality: "Underrated hometown hero. You live here — act like it.",
    orderThis: "Machboos, harees, luqaimat, balaleet for breakfast.",
    bestAreas: "Jumeirah, Al Seef, Al Fahidi",
    platforms: ["talabat", "careem"]
  },
  {
    id: "chinese",
    name: "Chinese",
    emoji: "🥡",
    personality: "Two moods: the mall version, or the real deal in International City.",
    orderThis: "Dim sum, mapo tofu, hand-pulled noodles, Peking duck if you're fancy.",
    bestAreas: "International City, Deira, Business Bay",
    platforms: ["keeta", "talabat"]
  },
  {
    id: "filipino",
    name: "Filipino",
    emoji: "🍚",
    personality: "Dubai's most slept-on cuisine. Sweet, sour, salty, all at once.",
    orderThis: "Chicken adobo, sinigang, lumpia, halo-halo for dessert.",
    bestAreas: "Satwa, Al Barsha, Karama",
    platforms: ["talabat", "careem"]
  },
  {
    id: "egyptian",
    name: "Egyptian",
    emoji: "🫘",
    personality: "Carbs with more carbs. Emotional support food.",
    orderThis: "Koshary, foul medames, hawawshi, molokhia.",
    bestAreas: "Deira, Al Qusais, Satwa",
    platforms: ["talabat", "noon"]
  },
  {
    id: "american",
    name: "American / Burgers",
    emoji: "🍔",
    personality: "The 1am decision. The hangover cure. The cheat meal that didn't ask permission.",
    orderThis: "Smash burger, buffalo wings, loaded fries, a shake you'll regret.",
    bestAreas: "JLT, Marina, Al Quoz",
    platforms: ["deliveroo", "talabat", "careem"]
  }
];
