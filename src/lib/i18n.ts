// Translation dictionary for the Luxury Rare Flowers website
export type Language = "en" | "ar";

export const translations = {
  en: {
    // Navbar
    nav: {
      brand: "NOIR FLORALE",
      about: "Our Story",
      rareVault: "The Rare Vault",
      services: "Services",
      journal: "Journal",
      contact: "Contact",
    },

    // About
    about: {
      title: "Our Story",
      subtitle: "Rooted in rarity, driven by passion",
      description:
        "At Noir Florale, we believe that every flower is a masterpiece — a fleeting work of art crafted by nature itself. For over a decade, we have traveled the world's most remote botanical gardens, shadowed master florists across continents, and cultivated relationships with rare-bloom growers from the misty highlands of Sri Lanka to the sun-drenched coastlines of the Mediterranean. Our atelier is not a flower shop; it is a sanctuary where rarity meets artistry, where each petal is treated with the reverence it deserves. We don't arrange flowers — we compose botanical symphonies.",
      stats: [
        { value: 150, suffix: "+", label: "Rare Species" },
        { value: 12, suffix: "+", label: "Years of Artistry" },
        { value: 500, suffix: "+", label: "Bespoke Creations" },
      ],
    },

    // Hero
    hero: {
      tagline: "RARE BOTANICAL ATELIER",
      headline: "Where Rarity Meets Artistry",
      subtitle: "Curating the world's most extraordinary blooms",
      cta: "Explore The Vault",
    },

    // Rare Vault
    vault: {
      title: "The Rare Vault",
      subtitle: "Each bloom tells a story of rarity",
      filterAll: "All",
      filterOrchids: "Orchids",
      filterRoses: "Roses",
      filterExotic: "Exotic",
      filterLegendary: "Legendary",
      flowers: [
        {
          name: "Ghost Orchid",
          origin: "Cuba & Florida",
          rarity: "Ultra Rare",
          symbolism: "Symbol of ethereal beauty and spiritual connection",
          category: "orchids",
        },
        {
          name: "Black Baccara Rose",
          origin: "France",
          rarity: "Extremely Rare",
          symbolism: "Represents deep devotion and mysterious elegance",
          category: "roses",
        },
        {
          name: "Juliet Rose",
          origin: "England",
          rarity: "Legendary",
          symbolism: "Known as the 3 million pound rose, a masterpiece of breeding",
          category: "roses",
        },
        {
          name: "Blue Lotus",
          origin: "Ancient Egypt",
          rarity: "Mythical",
          symbolism: "Sacred flower of rebirth and eternal awakening",
          category: "exotic",
        },
        {
          name: "Kadupul Flower",
          origin: "Sri Lanka",
          rarity: "Priceless",
          symbolism: "Blooms once under moonlight, wilts before dawn",
          category: "legendary",
        },
        {
          name: "Middlemist Red",
          origin: "China & New Zealand",
          rarity: "Extinct in Wild",
          symbolism: "The rarest flower on Earth, only two known specimens exist",
          category: "legendary",
        },
        {
          name: "Rothschild Orchid",
          origin: "Borneo",
          rarity: "Extremely Rare",
          symbolism: "The Gold of Kinabalu, found only on one mountain",
          category: "orchids",
        },
        {
          name: "Chocolate Cosmos",
          origin: "Mexico",
          rarity: "Extinct in Wild",
          symbolism: "Rich burgundy petals with an intoxicating chocolate fragrance",
          category: "exotic",
        },
        {
          name: "Franklinia Tree",
          origin: "Georgia, USA",
          rarity: "Extinct in Wild",
          symbolism: "A tree extinct in the wild since 1803, preserved only in cultivation",
          category: "exotic",
        },
        {
          name: "Fire Lily",
          origin: "South Africa",
          rarity: "Rare",
          symbolism: "Flame-like petals symbolizing passion and transformation",
          category: "exotic",
        },
      ],
    },

    // Services
    services: {
      title: "Our Services",
      subtitle: "Bespoke creations for the most discerning",
      items: [
        {
          title: "Event Styling",
          description:
            "Premium floral design for luxury events, galas, and celebrations that leave lasting impressions.",
        },
        {
          title: "Subscription Boxes",
          description:
            "Curated seasonal rare flower deliveries to your doorstep, each arrangement a work of art.",
        },
        {
          title: "Spatial Design",
          description:
            "Transforming spaces with rare botanical installations that redefine ambiance and atmosphere.",
        },
      ],
    },

    // Editorial
    editorial: {
      title: "The Journal",
      subtitle: "Stories from the botanical world",
      articles: [
        {
          title: "The Language of Rare Blooms",
          excerpt:
            "An exploration of flower symbolism across cultures and centuries, revealing how rare blooms speak louder than words.",
        },
        {
          title: "Midnight Botanics",
          excerpt:
            "The science behind flowers that bloom only at night — nature's most enigmatic botanical phenomena.",
        },
        {
          title: "The Art of Preservation",
          excerpt:
            "How ancient techniques and modern science keep rare flowers eternal, preserving beauty across time.",
        },
      ],
      readMore: "Read More",
    },

    // Contact
    contact: {
      title: "Begin Your Bespoke Journey",
      subtitle: "Every creation begins with a conversation",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      serviceLabel: "Service Interest",
      messageLabel: "Your Message",
      submitButton: "Send Inquiry",
      followUs: "Follow Us",
      placeholder: {
        name: "Enter your name",
        email: "your@email.com",
        message: "Tell us about your vision...",
      },
      serviceOptions: [
        { value: "", label: "Select a service" },
        { value: "event", label: "Event Styling" },
        { value: "subscription", label: "Subscription Boxes" },
        { value: "spatial", label: "Spatial Design" },
      ],
      info: {
        email: "hello@noirflorale.com",
        location: "Downtown Atelier, Dubai, UAE",
        hours: "By Appointment Only",
      },
    },

    // Footer
    footer: {
      brand: "NOIR FLORALE",
      tagline: "Rare Botanical Atelier",
      copyright: "© 2025 Noir Florale. All rights reserved.",
    },

    // Common
    common: {
      scrollToTop: "Back to top",
    },
  },

  ar: {
    // Navbar
    nav: {
      brand: "نوار فلورال",
      about: "قصتنا",
      rareVault: "الخزنة النادرة",
      services: "خدماتنا",
      journal: "المجلة",
      contact: "تواصل معنا",
    },

    // About
    about: {
      title: "قصتنا",
      subtitle: "متجذرون في الندرة، مدفوعون بالشغف",
      description:
        "في نوار فلورال، نؤمن أن كل زهرة هي تحفة فنية — عمل فني عابر زخرفته الطبيعة بنفسها. لأكثر من عقد من الزمان، سافرنا إلى حدائق النباتات النائية حول العالم، وتابعنا أساتيمة تنسيق الزهور عبر القارات، وأقمنا علاقات مع مزارعي الزهور النادرة من المرتفعات الضبابية في سريلانكا إلى السواحل المشمسة بالبحر الأبيض المتوسط. أتيلينا ليس مجرد محل زهور؛ إنه ملاذ حيث تلتقي الندرة بالفن، حيث يعامل كل بتلة بما يستحقه من تقدير. نحن لا نرتب الزهور — نحن نؤلف سيمفونيات نباتية.",
      stats: [
        { value: 150, suffix: "+", label: "نوع نادر" },
        { value: 12, suffix: "+", label: "سنة من الإبداع" },
        { value: 500, suffix: "+", label: "إبداع مخصص" },
      ],
    },

    // Hero
    hero: {
      tagline: "أتيلي الأزهار النادرة",
      headline: "حيث تلتقي الندرة بالفن",
      subtitle: "نختار أجمل الزهور النادرة في العالم",
      cta: "استكشف الخزنة",
    },

    // Rare Vault
    vault: {
      title: "الخزنة النادرة",
      subtitle: "كل زهرة تروي قصة ندرة",
      filterAll: "الكل",
      filterOrchids: "أوركيد",
      filterRoses: "ورود",
      filterExotic: "نادرة",
      filterLegendary: "أسطورية",
      flowers: [
        {
          name: "أوركيد الشبح",
          origin: "كوبا وفلوريدا",
          rarity: "نادر جداً",
          symbolism: "رمز للجمال الأثيري والارتباط الروحي",
          category: "orchids",
        },
        {
          name: "وردة البكارا السوداء",
          origin: "فرنسا",
          rarity: "نادر للغاية",
          symbolism: "تمثل التفاني العميق والأناقة الغامضة",
          category: "roses",
        },
        {
          name: "وردة جولييت",
          origin: "إنجلترا",
          rarity: "أسطوري",
          symbolism: "تُعرف بوردة الـ ٣ ملايين جنيه، تحفة تهجين",
          category: "roses",
        },
        {
          name: "اللوتس الأزرق",
          origin: "مصر القديمة",
          rarity: "أسطوري",
          symbolism: "زهرة مقدسة للبعث واليقظة الأبدية",
          category: "exotic",
        },
        {
          name: "زهرة كادوبول",
          origin: "سريلانكا",
          rarity: "ثمينة لا تقدر بثمن",
          symbolism: "تتفتح مرة واحدة تحت ضوء القمر وتذبل قبل الفجر",
          category: "legendary",
        },
        {
          name: "كميليا ميدلمست الحمراء",
          origin: "الصين ونيوزيلندا",
          rarity: "منقرض في البرية",
          symbolism: "أندر زهرة على وجه الأرض، يوجد منها عينتان فقط في العالم",
          category: "legendary",
        },
        {
          name: "أوركيد روثتشايلد",
          origin: "بورنيو",
          rarity: "نادر للغاية",
          symbolism: "ذهب كينابالو، توجد فقط على جبل واحد في العالم",
          category: "orchids",
        },
        {
          name: "كوزموس الشوكولاتة",
          origin: "المكسيك",
          rarity: "منقرض في البرية",
          symbolism: "بتلات بنية غنية برائحة الشوكولاتة الساحرة",
          category: "exotic",
        },
        {
          name: "شجرة فرانكلينيا",
          origin: "جورجيا، أمريكا",
          rarity: "منقرض في البرية",
          symbolism: "شجرة انقرضت في البرية منذ ١٨٠٣، حُفظت فقط في الزراعة",
          category: "exotic",
        },
        {
          name: "زنبق النار",
          origin: "جنوب أفريقيا",
          rarity: "نادر",
          symbolism: "بتلات تشبه اللهب ترمز للشغف والتحول",
          category: "exotic",
        },
      ],
    },

    // Services
    services: {
      title: "خدماتنا",
      subtitle: "إبداعات مصممة خصيصاً لأصحاب الذوق الرفيع",
      items: [
        {
          title: "تنسيق المناسبات الفاخرة",
          description:
            "تصميم زهور فاخر للمناسبات والحفلات المرموقة التي تترك انطباعاً لا يُنسى.",
        },
        {
          title: "الاشتراكات الدورية",
          description:
            "توصيل زهور نادرة موسمية إلى باب منزلك، كل ترتيب تحفة فنية.",
        },
        {
          title: "التصميم المكاني",
          description:
            "تحويل المساحات بتركيبات نباتية نادرة تعيد تعريف الأجواء والسحر.",
        },
      ],
    },

    // Editorial
    editorial: {
      title: "المجلة",
      subtitle: "قصص من عالم النباتات",
      articles: [
        {
          title: "لغة الزهور النادرة",
          excerpt:
            "استكشاف رمزية الزهور عبر الثقافات والعصور، وكيف تتحدث الزهور النادرة بصوت أعلى من الكلمات.",
        },
        {
          title: "علم النباتات الليلية",
          excerpt:
            "العلم وراء الزهور التي تتفتح فقط في الليل — أكثر الظواهر النباتية إثارة للغموض.",
        },
        {
          title: "فن الحفظ",
          excerpt:
            "كيف تحافظ التقنيات القديمة والعلم الحديث على الزهور النادرة خالدة عبر الزمن.",
        },
      ],
      readMore: "اقرأ المزيد",
    },

    // Contact
    contact: {
      title: "ابدأ رحلتك المخصصة",
      subtitle: "كل إبداع يبدأ بمحادثة",
      nameLabel: "اسمك",
      emailLabel: "البريد الإلكتروني",
      serviceLabel: "الخدمة المطلوبة",
      messageLabel: "رسالتك",
      submitButton: "إرسال استفسار",
      followUs: "تابعنا",
      placeholder: {
        name: "أدخل اسمك",
        email: "your@email.com",
        message: "أخبرنا عن رؤيتك...",
      },
      serviceOptions: [
        { value: "", label: "اختر خدمة" },
        { value: "event", label: "تنسيق المناسبات" },
        { value: "subscription", label: "الاشتراكات الدورية" },
        { value: "spatial", label: "التصميم المكاني" },
      ],
      info: {
        email: "hello@noirflorale.com",
        location: "الأتيلي، وسط دبي، الإمارات",
        hours: "بموعد فقط",
      },
    },

    // Footer
    footer: {
      brand: "نوار فلورال",
      tagline: "أتيلي الأزهار النادرة",
      copyright: "© 2025 نوار فلورال. جميع الحقوق محفوظة.",
    },

    // Common
    common: {
      scrollToTop: "العودة للأعلى",
    },
  },
} as const;

export type Translations = typeof translations.en;

// Helper to get translation by language
export function getTranslation(lang: Language): Translations {
  return translations[lang];
}

// Check if language is RTL
export function isRTL(lang: Language): boolean {
  return lang === "ar";
}
