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
      testimonials: "Testimonials",
    },

    // About
    about: {
      title: "Our Story",
      subtitle: "Rooted in rarity, driven by passion",
      description:
        "At Noir Florale, we believe that every flower is a masterpiece — a fleeting work of art crafted by nature itself. For over a decade, we have traveled the world's most remote botanical gardens, shadowed master florists across continents, and cultivated relationships with rare-bloom growers from the misty highlands of Sri Lanka to the sun-drenched coastlines of the Mediterranean. Our atelier is not a flower shop; it is a sanctuary where rarity meets artistry, where each petal is treated with the reverence it deserves. We don't arrange flowers — we compose botanical symphonies.",
      established: "Est. 2013",
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
      scroll: "Scroll",
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
      bloomCount: "blooms",
      bloomCountSingle: "bloom",
      modalSymbolism: "Symbolism & Meaning",
      modalCta: "Inquire About This Bloom",
      flowers: [
        {
          name: "Ghost Orchid",
          origin: "Cuba & Florida",
          rarity: "Ultra Rare",
          symbolism: "Symbol of ethereal beauty and spiritual connection. The Ghost Orchid has no leaves, deriving its energy entirely from a symbiotic fungal relationship deep within ancient cypress swamps. Its phantom-white blooms appear to float in mid-air, giving rise to legends of spectral gardens hidden in the Everglades.",
          category: "orchids",
        },
        {
          name: "Black Baccara Rose",
          origin: "France",
          rarity: "Extremely Rare",
          symbolism: "Represents deep devotion and mysterious elegance. Bred by Meilland in France, this velvety black-red rose was cultivated specifically to mirror the color of a ballgown — a single rose can take up to nine years to perfect, making each petal a testament to patience and artistry.",
          category: "roses",
        },
        {
          name: "Juliet Rose",
          origin: "England",
          rarity: "Legendary",
          symbolism: "Known as the three million pound rose, a masterpiece of breeding by David Austin. It took fifteen years and an estimated three million pounds to develop this breathtaking apricot bloom — the most expensive rose ever created in horticultural history.",
          category: "roses",
        },
        {
          name: "Blue Lotus",
          origin: "Ancient Egypt",
          rarity: "Mythical",
          symbolism: "Sacred flower of rebirth and eternal awakening. In ancient Egyptian mythology, the Blue Lotus was believed to carry the soul into the afterlife. Its intoxicating fragrance was used in temple ceremonies, and depictions of this celestial bloom adorn the walls of pharaohs' tombs.",
          category: "exotic",
        },
        {
          name: "Kadupul Flower",
          origin: "Sri Lanka",
          rarity: "Priceless",
          symbolism: "Blooms once under moonlight, wilts before dawn. The Kadupul cannot be bought or sold — it opens only in the dark hours and dissolves before sunrise. In Sri Lankan folklore, gifting this flower symbolizes the rarest and most sincere form of love, one that asks nothing in return.",
          category: "legendary",
        },
        {
          name: "Middlemist Red",
          origin: "China & New Zealand",
          rarity: "Extinct in Wild",
          symbolism: "The rarest flower on Earth, only two known specimens exist — one in a private garden in New Zealand and another in a greenhouse in the United Kingdom. Originally brought from China in 1804, this crimson camellia was thought lost to the world until rediscovered decades later.",
          category: "legendary",
        },
        {
          name: "Rothschild Orchid",
          origin: "Borneo",
          rarity: "Extremely Rare",
          symbolism: "The Gold of Kinabalu, found only on the slopes of Mount Kinabalu in Malaysian Borneo. This magnificent orchid blooms only once every few years, and a single stem can command prices exceeding five thousand dollars on the black market — nature's most guarded treasure.",
          category: "orchids",
        },
        {
          name: "Chocolate Cosmos",
          origin: "Mexico",
          rarity: "Extinct in Wild",
          symbolism: "Rich burgundy petals with an intoxicating chocolate fragrance that has enchanted botanists since Victorian times. Once found across the highlands of central Mexico, it now survives only through careful vegetative cloning — every living Chocolate Cosmos is genetically identical to the original wild specimens.",
          category: "exotic",
        },
        {
          name: "Franklinia Tree",
          origin: "Georgia, USA",
          rarity: "Extinct in Wild",
          symbolism: "A tree extinct in the wild since 1803, preserved only in cultivation by devoted botanists. Discovered by John and William Bartram along the Altamaha River in Georgia, every Franklinia alive today descends from seeds collected before the species vanished from its native habitat forever.",
          category: "exotic",
        },
        {
          name: "Fire Lily",
          origin: "South Africa",
          rarity: "Rare",
          symbolism: "Flame-like petals symbolizing passion and transformation. Native to the fire-prone grasslands of South Africa, the Fire Lily emerges dramatically from scorched earth after wildfires, its vivid orange-red blooms a living metaphor for rebirth and the beauty that follows destruction.",
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
            "Premium floral design for luxury events, galas, and celebrations that leave lasting impressions. From intimate dinner parties for twelve to grand ballroom spectacles for thousands, our design team transforms venues into living gardens of rare botanical artistry.",
        },
        {
          title: "Subscription Boxes",
          description:
            "Curated seasonal rare flower deliveries to your doorstep, each arrangement a work of art. Our quarterly subscriptions feature blooms sourced from six continents, accompanied by a hand-written provenance card detailing the origin and symbolism of each flower.",
        },
        {
          title: "Spatial Design",
          description:
            "Transforming spaces with rare botanical installations that redefine ambiance and atmosphere. Whether it is a luxury hotel lobby, a private residence, or a flagship retail space, we create immersive botanical worlds that captivate and inspire all who enter.",
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

    // Testimonials
    testimonials: {
      label: "Testimonials",
      title: "Voices of Our Patrons",
      subtitle: "Words from those who have experienced our artistry",
      items: [
        {
          name: "Her Excellency Shamma Al Maktoum",
          role: "Private Collector, Dubai",
          text: "Noir Florale transformed our palace reception into an enchanted garden. The Ghost Orchids were breathtaking — our guests spoke of nothing else for weeks. Their attention to detail and understanding of Arabian hospitality aesthetics is unparalleled.",
        },
        {
          name: "Jean-Pierre Fontaine",
          role: "Creative Director, Maison Lumière",
          text: "We commissioned Noir Florale for our Paris Fashion Week after-party. The spatial design they created with rare Rothschild Orchids and Black Baccara Roses was nothing short of a living artwork. Truly a botanical atelier at the pinnacle of its craft.",
        },
        {
          name: "Lady Catherine Pemberton",
          role: "Horticultural Patron, London",
          text: "I have collected rare flowers for thirty years, and never have I encountered such impeccable sourcing and presentation. The Juliet Roses in my subscription box arrived in perfect condition, each one a testament to their extraordinary network of growers worldwide.",
        },
      ],
    },

    // Newsletter
    newsletter: {
      title: "Join the Inner Circle",
      subtitle: "Receive exclusive botanical dispatches, rare bloom alerts, and private viewing invitations directly to your inbox.",
      placeholder: "Enter your email",
      button: "Subscribe",
      success: "Subscribed ✓",
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
      close: "Close",
      loading: "Curating Rarity",
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
      testimonials: "آراء العملاء",
    },

    // About
    about: {
      title: "قصتنا",
      subtitle: "متجذرون في الندرة، مدفوعون بالشغف",
      description:
        "في نوار فلورال، نؤمن أن كل زهرة هي تحفة فنية — عمل فني عابر زخرفته الطبيعة بنفسها. لأكثر من عقد من الزمان، سافرنا إلى حدائق النباتات النائية حول العالم، وتابعنا أساتيمة تنسيق الزهور عبر القارات، وأقمنا علاقات مع مزارعي الزهور النادرة من المرتفعات الضبابية في سريلانكا إلى السواحل المشمسة بالبحر الأبيض المتوسط. أتيلينا ليس مجرد محل زهور؛ إنه ملاذ حيث تلتقي الندرة بالفن، حيث يعامل كل بتلة بما يستحقه من تقدير. نحن لا نرتب الزهور — نحن نؤلف سيمفونيات نباتية.",
      established: "تأسس ٢٠١٣",
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
      scroll: "مرر",
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
      bloomCount: "زهرة",
      bloomCountSingle: "زهرة",
      modalSymbolism: "الرمزية والمعنى",
      modalCta: "استفسر عن هذه الزهرة",
      flowers: [
        {
          name: "أوركيد الشبح",
          origin: "كوبا وفلوريدا",
          rarity: "نادر جداً",
          symbolism: "رمز للجمال الأثيري والارتباط الروحي. لا يمتلك أوركيد الشبح أي أوراق، ويحصل على طاقته بالكامل من علاقة فطرية تكافلية داخل مستنقعات السرو القديمة. تتدفق أزهاره البيضاء الشبحية كأنها تطفو في الهواء، مما أثار أساطير عن حدائق طيفية مخفية في إيفرجلايدز.",
          category: "orchids",
        },
        {
          name: "وردة البكارا السوداء",
          origin: "فرنسا",
          rarity: "نادر للغاية",
          symbolism: "تمثل التفاني العميق والأناقة الغامضة. تم تهجينها من قبل ميلان في فرنسا، تم تربية هذه الوردة المخملية السوداء لتعكس لون فستان سهرة — قد تستغرق وردة واحدة تسع سنوات لإكمالها، مما يجعل كل بتلة شاهدة على الصبر والإبداع.",
          category: "roses",
        },
        {
          name: "وردة جولييت",
          origin: "إنجلترا",
          rarity: "أسطوري",
          symbolism: "تُعرف بوردة الـ ٣ ملايين جنيه، تحفة تهجين من ديفيد أوستن. استغرق تطويرها خمسة عشر عاماً وثلاثة ملايين جنيه — أغلى وردة في تاريخ البستنة.",
          category: "roses",
        },
        {
          name: "اللوتس الأزرق",
          origin: "مصر القديمة",
          rarity: "أسطوري",
          symbolism: "زهرة مقدسة للبعث واليقظة الأبدية. في الأساطير المصرية القديمة، كان يُعتقد أن اللوتس الأزرق يحمل الروح إلى العالم الآخر. استُخدمت رائحته الساحرة في طقوس المعابد، وزُينت بها جدران مقابر الفراعنة.",
          category: "exotic",
        },
        {
          name: "زهرة كادوبول",
          origin: "سريلانكا",
          rarity: "ثمينة لا تقدر بثمن",
          symbolism: "تتفتح مرة واحدة تحت ضوء القمر وتذبل قبل الفجر. لا يمكن شراء كادوبول أو بيعه — يتفتح فقط في ساعات الظلام ويتلاشى قبل شروق الشمس. في الفولكلور السريلانكي، يرمز إهداء هذه الزهرة لأصدق وأندر أشكال الحب.",
          category: "legendary",
        },
        {
          name: "كميليا ميدلمست الحمراء",
          origin: "الصين ونيوزيلندا",
          rarity: "منقرض في البرية",
          symbolism: "أندر زهرة على وجه الأرض، يوجد منها عينتان فقط — واحدة في حديقة خاصة في نيوزيلندا وأخرى في صوبة زجاجية في المملكة المتحدة. نُقلت أصلاً من الصين عام ١٨٠٤ وظُن أنها فقدت إلى الأبد.",
          category: "legendary",
        },
        {
          name: "أوركيد روثتشايلد",
          origin: "بورنيو",
          rarity: "نادر للغاية",
          symbolism: "ذهب كينابالو، يوجد فقط على منحدرات جبل كينابالو في بورنيو الماليزية. يتفتح هذا الأوركيد المذهل مرة كل بضع سنوات، ويمكن أن يصل سعر ساق واحد إلى أكثر من خمسة آلاف دولار في السوق السوداء.",
          category: "orchids",
        },
        {
          name: "كوزموس الشوكولاتة",
          origin: "المكسيك",
          rarity: "منقرض في البرية",
          symbolism: "بتلات بنية غنية برائحة الشوكولاتة الساحرة التي سحرت علماء النباتات منذ العصر الفيكتوري. بُعد أن كان ينتشر في مرتفعات وسط المكسيك، يعيش الآن فقط عبر استنساخ نباتي دقيق — كل كوزموس شوكولاتة حي مطابق وراثياً للنباتات البرية الأصلية.",
          category: "exotic",
        },
        {
          name: "شجرة فرانكلينيا",
          origin: "جورجيا، أمريكا",
          rarity: "منقرض في البرية",
          symbolism: "شجرة انقرضت في البرية منذ ١٨٠٣، حُفظت فقط في الزراعة من قبل علماء نباتات مخلصين. اكتشفها جون وويليام بارترام على ضفاف نهر ألتاماها، وكل فرانكلينيا حية اليوم تنحدر من بذور جُمعت قبل أن يختفي النوع من موطنه الأصلي.",
          category: "exotic",
        },
        {
          name: "زنبق النار",
          origin: "جنوب أفريقيا",
          rarity: "نادر",
          symbolism: "بتلات تشبه اللهب ترمز للشغف والتحول. موطنه الأصلي مراعي جنوب أفريقيا المعرضة للحرائق، يظهر زنبق النار بشكل درامي من الأرض المحترقة بعد حرائق الغابات — استعارة حية للبعث والجمال الذي يتبع الدمار.",
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
            "تصميم زهور فاخر للمناسبات والحفلات المرموقة التي تترك انطباعاً لا يُنسى. من عشاءات خاصة لأثني عشر ضيفاً إلى حفلات ضخمة لآلاف، نحوّل الفعاليات إلى حدائق نباتية نادرة حية.",
        },
        {
          title: "الاشتراكات الدورية",
          description:
            "توصيل زهور نادرة موسمية إلى باب منزلك، كل ترتيب تحفة فنية. تشمل اشتراكاتنا الموسمية زهوراً من ست قارات، مع بطاقة منشأ مكتوبة بخط اليد تروي أصل ورمزية كل زهرة.",
        },
        {
          title: "التصميم المكاني",
          description:
            "تحويل المساحات بتركيبات نباتية نادرة تعيد تعريف الأجواء والسحر. سواء كان لوبي فندق فاخر أو منزل خاص أو فضاء تجاري، نصمم عوالم نباتية آسرة تبهز كل من يدخلها.",
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

    // Testimonials
    testimonials: {
      label: "آراء العملاء",
      title: "أصوات عملائنا المكرمين",
      subtitle: "كلمات من عاشوا تجربة إبداعنا",
      items: [
        {
          name: "سماة المكتوم",
          role: "جامعة خاصة، دبي",
          text: "حوّل نوار فلورال استقبال قصرنا إلى حديقة ساحرة. أزهار الشبح كانت مذهلة — ضيوفنا لم يتحدثوا عن شيء سواها لأسابيع. اهتمامهم بالتفاصيل وفهمهم لجماليات الضيافة العربية لا مثيل له.",
        },
        {
          name: "جان بيير فونتين",
          role: "المدير الإبداعي، مايزون لوميير",
          text: "كلّفنا نوار فلورال لتصميم حفل ما بعد عرض أزياء باريس. التصميم المكاني الذي أنشأوه بأوركيد روثتشايلد ووردات البكارا السوداء كان عملاً فنياً حياً بكل ما تحمله الكلمة.",
        },
        {
          name: "السيدة كاثرين بيمبرتون",
          role: "راعية البستنة، لندن",
          text: "جمعت الزهور النادرة لثلاثين عاماً، ولم أواجه أبداً مثل هذا الإتقان في الاختيار والعرض. وردات جولييت في صندوق اشتراكي وصلت في حالة مثالية — كل واحدة شاهدة على شبكتهم الاستثنائي من المزارعين حول العالم.",
        },
      ],
    },

    // Newsletter
    newsletter: {
      title: "انضم للدائرة الخاصة",
      subtitle: "احصل على رسائل نباتية حصرية وتنبيهات عن الزهور النادرة ودعوات لمعارض خاصة مباشرة في بريدك.",
      placeholder: "أدخل بريدك الإلكتروني",
      button: "اشترك",
      success: "تم الاشتراك ✓",
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
      close: "إغلاق",
      loading: "نختار لك الأندر",
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
