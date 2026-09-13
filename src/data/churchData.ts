import { Leader, Sermon, Lesson, Branch, ChurchEvent } from '../types';

export const CHURCH_INFO = {
  fullName: 'THE NEW COVENANT CHURCH OF AFRICA ALPHA AND OMEGA',
  shortName: 'New Covenant Church of Africa',
  address: 'Address 30, Mirere Sub Location, Matungu Subcounty, Mumias, Kenya',
  phone: '0758306011',
  phone2: '0710156516',
  email: 'newcovenantchurchalphaandomega@gmail.com',
  mPesaPaybill: '222111',
  mPesaAccount: '081000022814',
  copyrightYear: 2024,
  motto: 'Transforming lives and society through prophecy and spiritual nurturing.'
};
export const FOUNDING_YEAR = 2018;

export const IMAGES = {
  heroBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtYE98OENi4N2IDppn5V-NBeE-ZO-qD7a4Liv1bwgJVwyOoa9jpr8k08y0XVCu1AnyGXNrcKP2tXVfs_2y3anYgBtRo6xdTCtVQRBASylfIvYwtpSl1y2xnf-lFg9TKpIAcfq5B2fg6kJPDjQXelgPzN4rzkrsW1VJ4HNThWvmTj30oK5QQ03nbDW2A-vkAJqit9CZeFLZI5ccg0gd7qjaWx7bqAOZB8B-RdW36zlO8pGKH3Ajr5PE',
  communityMumias: 'https://iwmbezzrfytebpoxjkjx.supabase.co/storage/v1/object/public/new%20covenant%20asstes/group_2.jpeg',
  founder_about: 'https://iwmbezzrfytebpoxjkjx.supabase.co/storage/v1/object/public/new%20covenant%20asstes/founder_8.jpeg',
  sermon1: 'https://i3.ytimg.com/vi/iwcjcSEmw60/hqdefault.jpg',
  sermon2: 'https://i3.ytimg.com/vi/iwcjcSEmw60/hqdefault.jpg',
  sermon3: 'https://i3.ytimg.com/vi/iwcjcSEmw60/hqdefault.jpg',
  sermon4: 'https://i3.ytimg.com/vi/iwcjcSEmw60/hqdefault.jpg',
  leaders: {
    founder: 'https://iwmbezzrfytebpoxjkjx.supabase.co/storage/v1/object/public/new%20covenant%20asstes/founder_6.jpeg',
    chairperson: 'https://iwmbezzrfytebpoxjkjx.supabase.co/storage/v1/object/public/new%20covenant%20asstes/chairman.jpeg',
    secretary_general: 'https://iwmbezzrfytebpoxjkjx.supabase.co/storage/v1/object/public/new%20covenant%20asstes/GS.jpeg',
    treasurer: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL8YE7kH6q7eKz0Pu-NMXSY5PiaJ6WdyK1vlJOcuprRge88OHul06X9LTq9CCX94QeQ6NQe04ObBuq0-qiM0fDjnZ-R2Sve5luPJ_Ri9aYcCQ7auTdnW19QsYLPW6pR_HJ8-fn712_t6ee6BxLK34cBhN28WaN4ZPWhhWf30HWxwf63Ezi0ZqpvsnBgUMJRu_poKjjuiCLQZHsKMs8WzvhUBsQh_p65dQkbxXRu3oy5aSr2fPFHwS0'
  }
};

export const LEADERS: Leader[] = [
  {
    id: 'prophet-raphael',
    name: 'Prophet Raphael Zedekiah',
    role: 'FOUNDER',
    image: IMAGES.leaders.founder,
    bio: 'Guided by divine revelation, Prophet Raphael Zedekiah established The New Covenant Church of Africa Alpha and Omega to spread prophetic truth, restore spiritual dignity, and foster holistic community growth across Mumias and beyond.',
    scriptureQuote: '"Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations." — Jeremiah 1:5'
  },
  {
    id: 'linus-wesonga',
    name: 'Linus Wesonga Wanyama',
    role: 'CHAIRPERSON',
    image: IMAGES.leaders.chairperson,
    bio: 'Brother Linus provides steadfast administrative vision and leadership, uniting our main congregation in Mumias and coordinating regional ministry initiatives with wisdom and community outreach focus.',
    scriptureQuote: '"Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." — Proverbs 3:5-6'
  },
  {
    id: 'daniel-muhuyi',
    name: 'Daniel Muhuyi Chemiati',
    role: 'GENERAL SECRETARY',
    image: IMAGES.leaders.secretary_general,
    bio: 'Overseeing church communications, documentation, and operational organization, Elder Daniel ensures seamless coordination between leadership, congregants, and regional branches.',
    scriptureQuote: '"Let all things be done decently and in order." — 1 Corinthians 14:40'
  },
  {
    id: 'jackline-khaombi',
    name: 'Jackline Khaombi Kasiani',
    role: 'TREASURER',
    image: IMAGES.leaders.treasurer,
    bio: 'Sister Jackline stewards our financial resources with transparency, managing community relief funds, sanctuary development, and charitable medical and food distributions.',
    scriptureQuote: '"Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms." — 1 Peter 4:10'
  }
];

export const SERMONS: Sermon[] = [
  {
    id: 'sermon-1',
    title: 'The Covenant of Peace in Troubled Times',
    date: 'Oct 15, 2023',
    speaker: 'Prophet Raphael Zedekiah',
    description: "An in-depth exploration of navigating life's storms anchored by faith and the enduring promises found within the scriptures.",
    image: IMAGES.sermon1,
    youtubeId: 'iwcjcSEmw60',
    type: 'video',
    duration: '48 min',
    featured: true,
    summaryPoints: [
      'Understanding the divine covenant of peace made with God’s people.',
      'How to stand firm against spiritual and economic uncertainty.',
      'Practicing prophetic prayer and daily meditation in scripture.',
      'Building a sanctuary of peace within your household.'
    ]
  },
  {
    id: 'sermon-2',
    title: 'Walking in Divine Alignment',
    date: 'Oct 08, 2023',
    speaker: 'Guest Speaker',
    description: 'A transformative teaching on aligning your daily habits, thoughts, and career with God’s eternal purpose.',
    image: IMAGES.sermon2,
    youtubeId: 'iwcjcSEmw60',
    type: 'video',
    duration: '35 min',
    summaryPoints: [
      'Discerning the voice of God in everyday decisions.',
      'Overcoming distraction and spiritual fatigue.',
      'The power of covenant partnerships and community unity.'
    ]
  },
  {
    id: 'sermon-3',
    title: 'The Foundation of Grace',
    date: 'Oct 01, 2023',
    speaker: 'Prophet Raphael Zedekiah',
    description: 'A deep biblical study on unmerited favor and how grace serves as the bedrock of covenant relationship.',
    image: IMAGES.sermon3,
    youtubeId: 'iwcjcSEmw60',
    type: 'audio',
    duration: '42 min',
    summaryPoints: [
      'Transitioning from law-based fear to grace-filled devotion.',
      'Restoration of broken lives through spiritual renewal.',
      'Living as ambassadors of divine grace in Africa.'
    ]
  },
  {
    id: 'sermon-4',
    title: 'Prophetic Nurturing for Families',
    date: 'Sep 24, 2023',
    speaker: 'Linus Wesonga Wanyama',
    description: 'Practical guidance for raising children in the way of the Lord and sustaining strong, prayerful marriages.',
    image: IMAGES.sermon4,
    youtubeId: 'iwcjcSEmw60',
    type: 'audio',
    duration: '39 min',
    summaryPoints: [
      'Establishing the family altar and regular worship.',
      'Guarding young minds against modern spiritual traps.',
      'Covenant leadership in the household.'
    ]
  }
];

export const LESSONS: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'The Season of Preparation',
    category: 'Prophetic Insight',
    readTime: '5 min read',
    excerpt: 'Understanding the spiritual markers of transition and how to ready your heart for the next outpouring of grace.',
    author: 'Prophet Raphael Zedekiah',
    date: 'Oct 20, 2023',
    content: `
Every great move of God is preceded by a season of quiet preparation. Before the rain falls upon dry ground, the soil must first be tilled and seed planted in quiet faith.
      
### 1. Consecration of the Heart
In Joshua 3:5, Joshua instructed the people: "Sanctify yourselves, for tomorrow the LORD will do wonders among you." Consecration is not merely abstaining from wrong; it is actively setting apart your heart, mind, and hands for divine service.
      
### 2. Discerning Spiritual Seasons
Just as farmers in Matungu observe the sky and soil before planting, spiritual believers must discern the signs of their spiritual season. Are you in a season of pruning, planting, or harvest? Recognizing your season prevents impatience and spiritual weariness.
      
### 3. Steadfastness in Quiet Devotion
The depth of your public victory is determined by the sincerity of your private prayer closet. Set aside dedicated time each morning for scripture reading and silent prayer.
    `
  },
  {
    id: 'lesson-2',
    title: 'Wisdom Literature: Proverbs',
    category: 'Bible Study',
    readTime: '12 min read',
    excerpt: 'A practical guide to applying ancient wisdom to modern dilemmas, focusing on the first five chapters.',
    author: 'Elder Daniel Muhuyi',
    date: 'Oct 14, 2023',
    content: `
The Book of Proverbs is God’s practical blueprint for honorable living, wise stewardship, and peaceable community relations.
      
### The Fear of the Lord as the Beginning
Proverbs 1:7 teaches that "The fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction." Here, fear does not mean terror, but awe-filled reverence and willingness to align one’s conduct with divine truth.
      
### Guarding Your Heart
Proverbs 4:23 urges us to keep our heart with all vigilance, for from it flow the springs of life. What we allow into our minds through speech, media, and counsel shapes our spiritual destiny.
      
### Practical Financial Honesty
Proverbs emphasizes honest labor, avoiding reckless debt, and honoring God with the firstfruits of all our produce.
    `
  },
  {
    id: 'lesson-3',
    title: 'Anchored in the Covenant',
    category: 'Prophetic Insight',
    readTime: '7 min read',
    excerpt: 'Revisiting the foundational promises made to believers and how they provide stability in uncertain times.',
    author: 'Prophet Raphael Zedekiah',
    date: 'Oct 05, 2023',
    content: `
When winds roar and waves crash against the vessel, it is not the strength of the sail but the grip of the anchor that holds the ship steady.
     
### Unshakable Promises
God's covenant with His people Alpha and Omega is eternal. Isaiah 54:10 promises: "Though the mountains be shaken and the hills be removed, yet my unfailing love for you will not be shaken nor my covenant of peace be removed."
      
### Living as Covenant Heirs
When you understand your standing in Christ, anxiety loses its authority over your household. Walk with assurance, knowing that the Lord God of Africa shields those who trust in Him.
    `
  },
  {
    id: 'lesson-4',
    title: 'Community Care as Gospel Witness',
    category: 'Community Focus',
    readTime: '6 min read',
    excerpt: 'How practical acts of mercy, food distribution, and shelter reflect the true heartbeat of Christ in Mumias.',
    author: 'Jackline Khaombi Kasiani',
    date: 'Sep 28, 2023',
    content: `
Faith without works is dead. At The New Covenant Church of Africa, we believe that preachings must be accompanied by outstretched hands.
      
### Feeding the Vulnerable
Our weekly relief drive in Matungu subcounty ensures that widows, orphans, and struggling families receive physical nourishment alongside spiritual comfort.
      
### Healthcare and Compassion
By providing basic medical outreach and clean water support, we demonstrate that God cares for both the body and the soul.
    `
  }
];

export const BRANCHES: Branch[] = [
  {
    name: 'Okoa Mirere Mumias H/Q',
    location: 'Address 30, Mirere Sub Location, Matungu Subcounty, Mumias',
    leader: 'Prophet Raphael Zedekiah',
    phone: '0723130292'
  },
  {
    name: 'Uthiru Church',
    location: 'Kakamega Central, near High Court Road',
    leader: 'Linus Wanyama',
    phone: '0729382003'
  },
  {
    name: 'Imakale Mumias ',
    location: 'Kanduyi Highway Junction, Bungoma',
    leader: 'Evangelist Mary Barasa',
    phone: '+254 734 567 890'
  },
  {
    name: 'Muriola Soy',
    location: 'Upper Hill Christian Center, Nairobi',
    leader: 'Elder David Wafula',
    phone: '+254 701 234 567'
  },
  {
    name: 'Murram mwamba',
    location: 'Upper Hill Christian Center, Nairobi',
    leader: 'Elder David Wafula',
    phone: '+254 701 234 567'
  },
  {
    name: 'Emutete, Bunyore',
    location: 'Upper Hill Christian Center, Nairobi',
    leader: 'Elder David Wafula',
    phone: '+254 701 234 567'
  },
  {
    name: 'Nyanganera Maabera Migori ',
    location: 'Upper Hill Christian Center, Nairobi',
    leader: 'Elder David Wafula',
    phone: '+254 701 234 567'
  },
  {
    name: 'Emulobi, Bunyore Vihiga',
    location: 'Upper Hill Christian Center, Nairobi',
    leader: 'Elder David Wafula',
    phone: '+254 701 234 567'
  },
  {
    name: 'Munyaka Eldoret',
    location: 'Upper Hill Christian Center, Nairobi',
    leader: 'Elder David Wafula',
    phone: '+254 701 234 567'
  },
  {
    name: 'Rungiiri Nairobi',
    location: 'Upper Hill Christian Center, Nairobi',
    leader: 'Elder David Wafula',
    phone: '+254 701 234 567'
  },
];

export const BELIEFS = [
  {
    id: 'scriptures',
    title: 'The Holy Scriptures',
    icon: 'auto_stories',
    description: 'We believe the Holy Bible is the inspired, infallible, and authoritative Word of God, serving as the supreme rule for faith, practice, and spiritual living.'
  },
  {
    id: 'trinity',
    title: 'The Holy Trinity',
    icon: 'diversity_3',
    description: 'We believe in one eternal God, existing in three distinct persons: God the Father, God the Son (Jesus Christ), and God the Holy Spirit.'
  },
  {
    id: 'salvation',
    title: 'Salvation & Grace',
    icon: 'volunteer_activism',
    description: 'We believe that salvation is a free gift of divine grace received through faith in Jesus Christ, whose sacrificial death and resurrection redeemed humanity.'
  },
  {
    id: 'prophetic',
    title: 'Prophetic Ministry & Holy Spirit',
    icon: 'psychology_alt',
    description: 'We believe in the active presence and gifts of the Holy Spirit, including prophetic revelation, divine healing, and spiritual discernment for today.'
  },
  {
    id: 'community',
    title: 'Holistic Care & Mercy',
    icon: 'diversity_1',
    description: 'We believe true worship manifests in practical love—caring for widows, orphans, the sick, and the needy in Mumias and across Africa.'
  },
  {
    id: 'covenant',
    title: 'The New Covenant',
    icon: 'gavel',
    description: 'We believe believers are joined in a sacred covenant with God, called to live in righteousness, unity, peace, and eternal hope.'
  }
];

export const EVENTS: ChurchEvent[] = [
  {
    id: 'event-1',
    title: 'Sunday Victory & Prophetic Worship Service',
    date: 'Sun, Nov 12, 2026',
    time: '9:00 AM - 12:30 PM',
    location: 'Mumias Main Cathedral',
    category: 'Worship',
    description: 'Join us for an uplifting morning of prophetic praise, powerful intercession, and divine revelatory teaching with Prophet Raphael Zedekiah.',
    isPast: false,
    image: IMAGES.sermon1
  },
  {
    id: 'event-2',
    title: 'Weekly Prayer & Deliverance Night',
    date: 'Wed, Nov 15, 2026',
    time: '5:00 PM - 7:00 PM',
    location: 'Mumias Main Cathedral & Online',
    category: 'Prayer',
    description: 'A powerful midweek gathering focused on intercessory prayer, spiritual warfare, and breaking chains through the Word of God.',
    isPast: false,
    image: IMAGES.sermon2
  },
  {
    id: 'event-3',
    title: 'Youth & Young Adults Fellowship',
    date: 'Sat, Nov 18, 2026',
    time: '2:00 PM - 5:00 PM',
    location: 'Mumias Youth Sanctuary',
    category: 'Youth',
    description: 'Empowering the next generation with divine purpose, spiritual guidance, mentorship, music, and interactive Bible discussions.',
    isPast: false,
    image: IMAGES.communityMumias
  },
  {
    id: 'event-4',
    title: 'Matungu Community Food & Medical Outreach',
    date: 'Sat, Oct 28, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Mirere Sub Location Grounds',
    category: 'Outreach',
    description: 'A practical gospel witness serving over 300 families with food baskets, basic health screenings, and prayer support.',
    isPast: true,
    image: IMAGES.sermon3,
    photos: [IMAGES.sermon3, IMAGES.communityMumias, IMAGES.sermon1]
  },
  {
    id: 'event-5',
    title: 'Annual Covenant Prophetic Conference',
    date: 'Fri, Sep 15, 2025',
    time: '8:30 AM - 5:00 PM',
    location: 'Mumias Main Cathedral',
    category: 'Special',
    description: 'A 3-day spiritual summit bringing together regional leaders and assemblies across Kenya for prayer and consecration.',
    isPast: true,
    image: IMAGES.baobabHero,
  photos: [IMAGES.baobabHero, IMAGES.sermon2, IMAGES.communityMumias, IMAGES.sermon1]
  }
];


export const IMPACT_STORIES = [
  {
    id: 'story-1',
    title: 'A Home Built in Faith',
    punchline: 'From a leaking shelter to a home of his own.',
    image: 'https://iwmbezzrfytebpoxjkjx.supabase.co/storage/v1/object/public/new%20covenant%20asstes/charity_1.jpeg',
    story:
      "For years, [Name] and his family lived in a one-room structure that could barely keep out the rain. When our church learned of his situation, our congregation came together, through offerings, labor, and prayer, to build him a proper home. Today, that same ground holds walls that stand firm and a roof that keeps his family dry, a small but lasting sign of God's provision through His people.",
    quote: "I never thought I would own a home like this. God used His church to answer a prayer I had almost stopped praying.",
    quotePerson: '[Name], recipient of the new home',
  },
];
