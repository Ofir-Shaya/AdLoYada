var moods = [
  {
    id: "comfort",
    emoji: "🫂",
    label: "Comfort food",
    tagline: "It's been a day. Feed the feeling.",
    color: "#C73E3A",
    cuisines: ["Lebanese", "Indian", "Italian"],
    dishes: [
      { id: "d-mansaf",        name: "Mansaf or a proper machboos",                   nutrition: { calories: 780,  protein: 42, carbs: 88,  fat: 28, portion: "1 plate ~550g" },          minTier: "casual"     },
      { id: "d-butterchicken", name: "Butter chicken + garlic naan (non-negotiable)", nutrition: { calories: 920,  protein: 38, carbs: 74,  fat: 52, portion: "1 curry + 2 naan" },        minTier: "casual"     },
      { id: "d-lasagna",       name: "Lasagna from anywhere that uses real bechamel", nutrition: { calories: 710,  protein: 34, carbs: 58,  fat: 36, portion: "1 slice ~350g" },           minTier: "casual"     },
      { id: "d-mixedgrill",    name: "Mixed grill with extra hummus and garlic sauce",nutrition: { calories: 1140, protein: 72, carbs: 46,  fat: 64, portion: "1 platter for one" },       minTier: "casual"     }
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
      { id: "d-halloumisalad", name: "Grilled halloumi salad with pomegranate",       nutrition: { calories: 520,  protein: 24, carbs: 28,  fat: 34, portion: "large bowl ~400g" },       minTier: "casual"     },
      { id: "d-sashimimiso",   name: "Salmon sashimi + miso soup",                    nutrition: { calories: 340,  protein: 36, carbs: 12,  fat: 16, portion: "12pc sashimi + miso" },    minTier: "casual"     },
      { id: "d-fattoushtaouk", name: "Fattoush + grilled chicken taouk",              nutrition: { calories: 580,  protein: 42, carbs: 34,  fat: 28, portion: "salad + 6 skewers" },      minTier: "casual"     },
      { id: "d-acaibowl",      name: "Acai bowl if you're in that JBR mood",          nutrition: { calories: 440,  protein: 9,  carbs: 78,  fat: 11, portion: "bowl ~450g" },             minTier: "casual"     }
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
      { id: "d-harees",        name: "Harees or balaleet at an Emirati spot",         nutrition: { calories: 480,  protein: 22, carbs: 62,  fat: 14, portion: "1 serving ~350g" },        minTier: "casual"     },
      { id: "d-budaejjigae",   name: "Korean army stew (budae jjigae) for the drama", nutrition: { calories: 860,  protein: 44, carbs: 52,  fat: 48, portion: "1 hot pot for one" },      minTier: "casual"     },
      { id: "d-injera",        name: "Ethiopian injera platter — eat with your hands, as god intended", nutrition: { calories: 690, protein: 28, carbs: 92, fat: 22, portion: "shared platter, your half" }, minTier: "casual" },
      { id: "d-sinigang",      name: "Sinigang from a Filipino spot in Satwa",        nutrition: { calories: 420,  protein: 32, carbs: 24,  fat: 18, portion: "bowl + rice" },            minTier: "casual"     }
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
      { id: "d-shawarma",      name: "Chicken shawarma with extra toum",              nutrition: { calories: 610,  protein: 34, carbs: 48,  fat: 30, portion: "wrap ~280g" },             minTier: "quick_eats" },
      { id: "d-smashburger",   name: "Smash burger + loaded fries",                   nutrition: { calories: 1180, protein: 48, carbs: 88,  fat: 64, portion: "double + fries" },         minTier: "casual"     },
      { id: "d-parathachai",   name: "Paratha roll + chai",                           nutrition: { calories: 520,  protein: 18, carbs: 56,  fat: 24, portion: "1 roll + 1 karak" },       minTier: "quick_eats" },
      { id: "d-manakish",      name: "Manakish zaatar — somehow always open",         nutrition: { calories: 410,  protein: 11, carbs: 52,  fat: 18, portion: "1 manakish" },             minTier: "quick_eats" }
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
      { id: "d-foul",          name: "Foul medames + eggs + fresh bread (the holy trinity)", nutrition: { calories: 640, protein: 28, carbs: 72, fat: 24, portion: "bowl + 2 eggs + 2 saj" }, minTier: "quick_eats" },
      { id: "d-biryani",       name: "Chicken biryani — grease is medicine",          nutrition: { calories: 880,  protein: 38, carbs: 102, fat: 32, portion: "single portion ~500g" },   minTier: "casual"     },
      { id: "d-pancakesbacon", name: "Pancakes + bacon + a large anything cold",      nutrition: { calories: 1040, protein: 26, carbs: 118, fat: 48, portion: "3 pancakes + 4 rashers" }, minTier: "casual"     },
      { id: "d-pho",           name: "Pho from a Vietnamese spot if you can find one",nutrition: { calories: 520,  protein: 34, carbs: 68,  fat: 12, portion: "large bowl ~700ml" },      minTier: "casual"     }
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
      { id: "d-omakase",       name: "Omakase-style sushi platter",                   nutrition: { calories: 680,  protein: 52, carbs: 64,  fat: 22, portion: "16-pc platter" },          minTier: "fine"       },
      { id: "d-trufflepasta",  name: "Truffle pasta + a good burrata",                nutrition: { calories: 980,  protein: 32, carbs: 96,  fat: 52, portion: "pasta + burrata split" },  minTier: "fine"       },
      { id: "d-wagyu",         name: "Wagyu from a proper DIFC steakhouse",           nutrition: { calories: 1120, protein: 58, carbs: 14,  fat: 88, portion: "250g ribeye + sides" },    minTier: "fine"       },
      { id: "d-homebakery",    name: "Dessert from Home Bakery, always Home Bakery",  nutrition: { calories: 520,  protein: 7,  carbs: 64,  fat: 26, portion: "1 slice cake" },           minTier: "upscale"    }
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
      { id: "d-karakaloo",     name: "Karak + aloo paratha under AED 15",             nutrition: { calories: 560,  protein: 12, carbs: 68,  fat: 26, portion: "paratha + karak" },        minTier: "quick_eats" },
      { id: "d-mandi",         name: "Chicken mandi — feeds you for two meals",        nutrition: { calories: 920,  protein: 48, carbs: 96,  fat: 34, portion: "half-chicken + rice" },   minTier: "quick_eats" },
      { id: "d-koshary",       name: "Koshary (the carbs-on-carbs-on-carbs special)",  nutrition: { calories: 780,  protein: 22, carbs: 132, fat: 18, portion: "large ~500g" },           minTier: "quick_eats" },
      { id: "d-zinger",        name: "Zinger burger meal with the student code",       nutrition: { calories: 940,  protein: 32, carbs: 98,  fat: 46, portion: "burger + fries + drink" }, minTier: "quick_eats" }
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
      { id: "d-familybiryani", name: "Family-size biryani + raita + kebabs",          nutrition: { calories: 720,  protein: 34, carbs: 82,  fat: 28, portion: "per-person of 4-person order" }, minTier: "casual" },
      { id: "d-mezzegrill",    name: "Mixed grill platter + 3 kinds of mezze",        nutrition: { calories: 880,  protein: 52, carbs: 54,  fat: 44, portion: "per-person share" },       minTier: "casual"     },
      { id: "d-pizzanight",    name: "Two large pizzas + wings + a sad salad",        nutrition: { calories: 960,  protein: 38, carbs: 92,  fat: 44, portion: "3 slices + 4 wings" },     minTier: "casual"     },
      { id: "d-chinesebanquet",name: "Chinese banquet: sweet & sour, kung pao, fried rice", nutrition: { calories: 840, protein: 34, carbs: 86, fat: 38, portion: "per-person share" }, minTier: "casual"     }
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
      { id: "d-tonkotsu",      name: "Single-serve ramen — tonkotsu, non-negotiable", nutrition: { calories: 720,  protein: 32, carbs: 78,  fat: 32, portion: "bowl ~650g" },             minTier: "casual"     },
      { id: "d-padthai",       name: "Pad thai + spring rolls + Thai iced tea",        nutrition: { calories: 980,  protein: 28, carbs: 118, fat: 42, portion: "pad thai + 3 rolls + tea" }, minTier: "casual"  },
      { id: "d-bibimbap",      name: "Bibimbap in the stone bowl",                    nutrition: { calories: 680,  protein: 28, carbs: 88,  fat: 22, portion: "dolsot bowl" },             minTier: "casual"     },
      { id: "d-sandwich",      name: "A really good sandwich. Don't underestimate.",  nutrition: { calories: 620,  protein: 32, carbs: 54,  fat: 28, portion: "sandwich + pickles" },      minTier: "casual"     }
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

var restaurants = [
  { id: "r-alsafadi",       name: "Al Safadi",              cuisine_id: "lebanese",      qualityTier: "casual",     isCloudKitchen: false, areas: ["Karama","Al Barsha","JBR"],          specialty: "Mixed grill, fattoush, hummus beiruty with toum that ruins you for others",    platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/al-safadi",       deliveroo: "https://deliveroo.ae/search?query=al%20safadi",       noon: "https://food.noon.com/uae-en/search?q=al+safadi"       }, priceRange: "AED 60–120 pp",  knownFor: "The Karama flagship since forever. Portions for two, priced for one." },
  { id: "r-allobeirut",     name: "Allo Beirut",            cuisine_id: "lebanese",      qualityTier: "casual",     isCloudKitchen: false, areas: ["Jumeirah","Business Bay","JLT"],      specialty: "Saj manakish, shawarma wraps, toum by the tub",                                platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/allo-beirut",     deliveroo: "https://deliveroo.ae/search?query=allo%20beirut",     noon: "https://food.noon.com/uae-en/search?q=allo+beirut"     }, priceRange: "AED 40–90 pp",   knownFor: "Open past 3am. The 2:47am decision." },
  { id: "r-baitmaryam",     name: "Bait Maryam",            cuisine_id: "lebanese",      qualityTier: "upscale",    isCloudKitchen: false, areas: ["JLT","La Mer"],                       specialty: "Home-style Palestinian-Lebanese — mansaf, maqluba, warak enab",                platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/bait-maryam",     deliveroo: "https://deliveroo.ae/search?query=bait%20maryam",     noon: "https://food.noon.com/uae-en/search?q=bait+maryam"     }, priceRange: "AED 120–220 pp", knownFor: "Home cooking at restaurant level. The mansaf is non-negotiable." },
  { id: "r-bombaybrasserie",name: "Bombay Brasserie",       cuisine_id: "indian",        qualityTier: "upscale",    isCloudKitchen: false, areas: ["Business Bay","DIFC"],                specialty: "Tandoori lamb chops, butter chicken with proper smoke, black dal",              platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/bombay-brasserie", deliveroo: "https://deliveroo.ae/search?query=bombay%20brasserie", noon: "https://food.noon.com/uae-en/search?q=bombay+brasserie" }, priceRange: "AED 140–260 pp", knownFor: "The butter chicken is the reason dinner parties exist." },
  { id: "r-ravisrestaurant",name: "Ravi Restaurant",        cuisine_id: "pakistani",     qualityTier: "casual",     isCloudKitchen: false, areas: ["Satwa","Karama","JLT"],               specialty: "Chicken karahi, seekh kebabs, tandoori roti, nihari on Sundays",                platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/ravi-restaurant", deliveroo: "https://deliveroo.ae/search?query=ravi%20restaurant", noon: "https://food.noon.com/uae-en/search?q=ravi+restaurant" }, priceRange: "AED 25–60 pp",   knownFor: "Satwa legend since 1978. If you don't know Ravi, you don't know Dubai." },
  { id: "r-calicutparagon", name: "Calicut Paragon",        cuisine_id: "indian",        qualityTier: "casual",     isCloudKitchen: false, areas: ["Bur Dubai","Business Bay","Karama"],  specialty: "Kerala biryani, appam + stew, fish curry, parotta",                            platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/calicut-paragon", deliveroo: "https://deliveroo.ae/search?query=calicut%20paragon", noon: "https://food.noon.com/uae-en/search?q=calicut+paragon" }, priceRange: "AED 40–90 pp",   knownFor: "The biryani Keralites in Dubai argue about weekly." },
  { id: "r-roberto",        name: "Roberto's",              cuisine_id: "italian",       qualityTier: "fine",       isCloudKitchen: false, areas: ["DIFC"],                                specialty: "Truffle tagliolini, burrata di Andria, osso buco",                              platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/robertos",        deliveroo: "https://deliveroo.ae/search?query=robertos+difc",     noon: "https://food.noon.com/uae-en/search?q=robertos"        }, priceRange: "AED 280–500 pp", knownFor: "DIFC power-lunch veteran. The truffle pasta you text about." },
  { id: "r-801pizza",       name: "801 Pizza",              cuisine_id: "italian",       qualityTier: "casual",     isCloudKitchen: false, areas: ["Al Wasl","City Walk","Business Bay"],  specialty: "Neapolitan wood-fired pizzas, burrata starters",                                platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/801-pizza",       deliveroo: "https://deliveroo.ae/search?query=801%20pizza",       noon: "https://food.noon.com/uae-en/search?q=801+pizza"       }, priceRange: "AED 80–150 pp",  knownFor: "Proper 60-second bake. No sad soggy middle." },
  { id: "r-kinoya",         name: "Kinoya",                 cuisine_id: "japanese",      qualityTier: "fine",       isCloudKitchen: false, areas: ["Downtown","Dar Wasl"],                specialty: "Tonkotsu ramen, truffle gyoza, izakaya sharing plates",                         platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/kinoya",          deliveroo: "https://deliveroo.ae/search?query=kinoya",            noon: "https://food.noon.com/uae-en/search?q=kinoya"          }, priceRange: "AED 180–320 pp", knownFor: "Chef Neha's ramen. Delivers when it feels like it — worth the wait." },
  { id: "r-sushiart",       name: "Sushi Art",              cuisine_id: "japanese",      qualityTier: "casual",     isCloudKitchen: false, areas: ["Marina","JLT","DIFC","Downtown"],     specialty: "Salmon sashimi sets, rainbow rolls, bento boxes",                               platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/sushi-art",       deliveroo: "https://deliveroo.ae/search?query=sushi%20art",       noon: "https://food.noon.com/uae-en/search?q=sushi+art"       }, priceRange: "AED 90–180 pp",  knownFor: "The reliable solo-ritual sashimi delivery. Fast, clean." },
  { id: "r-kcal",           name: "Kcal",                   cuisine_id: "mediterranean", qualityTier: "casual",     isCloudKitchen: false, areas: ["Marina","JBR","JLT","Business Bay"],  specialty: "Halloumi salads, grilled chicken bowls, protein pancakes",                      platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/kcal",            deliveroo: "https://deliveroo.ae/search?query=kcal",               noon: "https://food.noon.com/uae-en/search?q=kcal"            }, priceRange: "AED 55–95 pp",   knownFor: "Calorie counts on every box. Gym-bro gospel." },
  { id: "r-rightbite",      name: "Right Bite",             cuisine_id: "mediterranean", qualityTier: "casual",     isCloudKitchen: false, areas: ["Al Quoz","Marina","JLT"],             specialty: "Meal-plan bowls, fattoush with taouk, quinoa tabbouleh",                        platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/right-bite",      deliveroo: "https://deliveroo.ae/search?query=right%20bite",      noon: "https://food.noon.com/uae-en/search?q=right+bite"      }, priceRange: "AED 50–85 pp",   knownFor: "The subscription meal plan people actually stick with." },
  { id: "r-alfanar",        name: "Al Fanar",               cuisine_id: "emirati",       qualityTier: "casual",     isCloudKitchen: false, areas: ["Festival City","Al Seef"],            specialty: "Machboos, harees, luqaimat, balaleet",                                          platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/al-fanar",        deliveroo: "https://deliveroo.ae/search?query=al%20fanar",        noon: "https://food.noon.com/uae-en/search?q=al+fanar"        }, priceRange: "AED 80–160 pp",  knownFor: "The 1960s Dubai theme is cheesy; the machboos is not." },
  { id: "r-seoulgarden",    name: "Seoul Garden",           cuisine_id: "korean",        qualityTier: "casual",     isCloudKitchen: false, areas: ["Karama","Al Wasl"],                   specialty: "Budae jjigae, bibimbap, bulgogi, proper banchan spread",                        platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/seoul-garden",    deliveroo: "https://deliveroo.ae/search?query=seoul%20garden",    noon: "https://food.noon.com/uae-en/search?q=seoul+garden"    }, priceRange: "AED 70–140 pp",  knownFor: "The army stew arrives bubbling. The banchan never stops." },
  { id: "r-josephines",     name: "Josephine's Kitchen",    cuisine_id: "filipino",      qualityTier: "casual",     isCloudKitchen: false, areas: ["Satwa","Karama"],                     specialty: "Sinigang, chicken adobo, sisig, lumpia shanghai",                               platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/josephines",      deliveroo: "https://deliveroo.ae/search?query=josephines",        noon: "https://food.noon.com/uae-en/search?q=josephines"      }, priceRange: "AED 30–65 pp",   knownFor: "Satwa backstreet gem. Sinigang calibrated by a Manila tita." },
  { id: "r-addisababa",     name: "Addis Ababa Restaurant", cuisine_id: "ethiopian",     qualityTier: "casual",     isCloudKitchen: false, areas: ["Deira","Al Muraqqabat"],              specialty: "Injera platters, doro wat, tibs, shiro",                                        platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/addis-ababa",     deliveroo: "https://deliveroo.ae/search?query=addis%20ababa",     noon: "https://food.noon.com/uae-en/search?q=addis+ababa"     }, priceRange: "AED 50–100 pp",  knownFor: "One of the only Ethiopian spots on delivery. Eat with hands, as instructed." },
  { id: "r-aboutarek",      name: "Abou Tarek Koshary",     cuisine_id: "egyptian",      qualityTier: "quick_eats", isCloudKitchen: false, areas: ["Deira","Al Qusais"],                  specialty: "Koshary only. Carbs on carbs on carbs.",                                        platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/abou-tarek",      deliveroo: "https://deliveroo.ae/search?query=abou%20tarek",      noon: "https://food.noon.com/uae-en/search?q=abou+tarek"      }, priceRange: "AED 15–35 pp",   knownFor: "AED 20 feeds you twice. The daqqa sauce does the heavy lifting." },
  { id: "r-cut",            name: "CUT by Wolfgang Puck",   cuisine_id: "steakhouse",    qualityTier: "fine",       isCloudKitchen: false, areas: ["Downtown"],                            specialty: "A5 wagyu, bone-in ribeye, blue-cheese tots",                                    platforms: { talabat: "https://www.talabat.com/uae/restaurants/search/cut-wolfgang",    deliveroo: "https://deliveroo.ae/search?query=cut+by+wolfgang",   noon: "https://food.noon.com/uae-en/search?q=cut+wolfgang"    }, priceRange: "AED 400–800 pp", knownFor: "Address Downtown. The wagyu that justifies the delivery fee." }
];

var qualityTiers = [
  { id: "quick_eats",    label: "Quick eats",       description: "Takeaway counters, karak stands, shawarma joints. AED <30 pp." },
  { id: "cloud_kitchen", label: "Cloud kitchen",    description: "Delivery-only, no dining room, virtual brands from shared kitchens." },
  { id: "casual",        label: "Casual dining",    description: "Sit-down restaurant with a real kitchen and service. AED 50–150 pp." },
  { id: "upscale",       label: "Upscale",          description: "Chef-driven, design-led. Cheesecake Factory level and up. AED 150–300 pp." },
  { id: "fine",          label: "Fine dining",      description: "Tasting menus, tablecloths, DIFC-grade. AED 300+ pp." }
];

var platformLinks = {
  talabat:   { search: function(q) { return "https://www.talabat.com/uae/restaurants/search/" + encodeURIComponent(q); },   deals: "https://www.talabat.com/uae/offers" },
  deliveroo: { search: function(q) { return "https://deliveroo.ae/search?query=" + encodeURIComponent(q); },                deals: "https://deliveroo.ae/offers/dubai" },
  noon:      { search: function(q) { return "https://food.noon.com/uae-en/search?q=" + encodeURIComponent(q); },            deals: "https://food.noon.com/uae-en/offers" },
  keeta:     { search: function(q) { return "https://www.keeta.com/ae-en/s/" + encodeURIComponent(q); },                    deals: "https://www.keeta.com/ae-en/promotions" },
  careem:    { search: function(q) { return "https://www.careem.com/en-ae/food/search?q=" + encodeURIComponent(q); },       deals: "https://www.careem.com/en-ae/food/offers" }
};
