import { 
  ProjectSpecification, 
  KeyFeature, 
  NeighborDestination, 
  ConnectivityRoute, 
  LayoutType, 
  GalleryItem, 
  FacilityItem, 
  FAQItem 
} from '../types';

export const SPECIFICATIONS: ProjectSpecification[] = [
  { label: 'Property Name', value: 'Khaya Residences (Khaya Tree Bangsar)' },
  { label: 'Developer', value: 'Melati Ehsan Group' },
  { label: 'Landowner', value: 'Tenaga Nasional Berhad' },
  { label: 'Property Type', value: 'Serviced Residence & Retail' },
  { label: 'Tenure', value: '99-Year Leasehold' },
  { label: 'Land Area', value: '3.88 Acres' },
  { label: 'Configuration', value: '1 Tower | 61 Storeys' },
  { label: 'Total Units', value: '795 Units' },
  { label: 'Estimated Completion', value: 'Q2 2029' },
  { label: 'Land Title', value: 'Commercial under HDA' }
];

export const KEY_FEATURES: KeyFeature[] = [
  {
    id: 'feature-1',
    title: 'Strategic Urban Triangle',
    description: 'An rare enclave situated key corridors connecting established hubs Bangsar, Mid Valley City, and Kuala Lumpur Sentral.'
  },
  {
    id: 'feature-2',
    title: 'Transit Connectivity',
    description: 'Direct pedestrian access within walking distance to the Abdullah Hukum LRT & KTM station for efficient metropolitan commuting.'
  },
  {
    id: 'feature-3',
    title: 'Established Employment Corridor',
    description: 'Sits within minutes of major employment zones including KL Eco City, Mid Valley Offices, Bangsar South and KL Sentral.'
  },
  {
    id: 'feature-4',
    title: 'Integrated Retail Component',
    description: 'Features approximately 15,000 sqft of commercial and retail curated areas below for convenient day-to-day services.'
  },
  {
    id: 'feature-5',
    title: '40+ Lifestyle Facilities',
    description: 'Thoughtfully zoned across podium and sky decks focusing on holistic wellness, contemporary sports and social experiences.'
  },
  {
    id: 'feature-6',
    title: 'Mature Neighbourhood',
    description: 'Positioned close to essential legacy amenities, premium medical centers, top-tier schools and prominent lifestyle malls.'
  }
];

export const CONNECTIVITY: ConnectivityRoute[] = [
  { name: 'Federal Highway', description: 'Immediate signal-free entry connecting Kuala Lumpur CBD to PJ and Klang.' },
  { name: 'NPE (New Pantai Expressway)', description: 'Fast transit towards Subang Jaya, Bandar Sunway, and Pantai Dalam.' },
  { name: 'Jalan Bangsar', description: 'Direct historical trunk road leading directly into the heart of Bangsar and KL CBD.' },
  { name: 'Sprint Expressway', description: 'Gateway to Bukit Damansara, Sri Hartamas, and Mont Kiara.' }
];

export const DESTINATIONS: { category: string; list: NeighborDestination[] }[] = [
  {
    category: 'Transit Stations',
    list: [
      { name: 'Abdullah Hukum LRT & KTM Station', distance: '0.4 km', driveTime: '2 mins drive / 6 mins walk' },
      { name: 'KL Sentral Transportation Hub', distance: '2.5 km', driveTime: '5 mins drive / 1 LRT Stop' },
      { name: 'Mid Valley KTM Station', distance: '1.2 km', driveTime: '3 mins drive' }
    ]
  },
  {
    category: 'Commercial & Retail',
    list: [
      { name: 'Mid Valley Megamall & The Gardens Mall', distance: '1.0 km', driveTime: '3 mins drive' },
      { name: 'KL Eco City Mall', distance: '0.5 km', driveTime: '2 mins drive / 7 mins walk' },
      { name: 'Bangsar Shopping Centre (BSC)', distance: '3.2 km', driveTime: '7 mins drive' },
      { name: 'Bangsar Village I & II', distance: '2.0 km', driveTime: '5 mins drive' }
    ]
  },
  {
    category: 'Medical & Education',
    list: [
      { name: 'Pantai Hospital Kuala Lumpur', distance: '1.8 km', driveTime: '4 mins drive' },
      { name: 'University Malaya (UM)', distance: '3.0 km', driveTime: '8 mins drive' },
      { name: 'UM Medical Centre (UMMC)', distance: '3.5 km', driveTime: '9 mins drive' }
    ]
  }
];

export const LAYOUTS: LayoutType[] = [
  {
    type: 'Type A (1 Bedroom)',
    size: '630 sqft',
    rooms: '1 Bedroom',
    baths: '1 Bathroom',
    carpark: '1 Bay',
    features: ['Kitchen Cabinets', 'Hood & Hob', 'Air Conditioners', 'Branded Sanitaryware'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1KmHUekij4IxMibN1QDW1gN7BroOGXYH_&sz=w1000',
    description: 'Efficient contemporary layout designed selectively for single business professionals or minimalist urban couples.'
  },
  {
    type: 'Type B (2 Bedroom)',
    size: '772 sqft',
    rooms: '2 Bedrooms',
    baths: '2 Bathrooms',
    carpark: '1-2 Bays',
    features: ['Kitchen Cabinets', 'Hood & Hob', 'Air Conditioners', 'Refrigerator', 'Branded Sanitaryware'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1fZA5DP_fgSliYqNhCrfiKnKKD4ukSp3D&sz=w1000',
    description: 'Comfortably balanced functional framework suitable for young working families or active city-dwellers.'
  },
  {
    type: 'Type C (2+1 Bedroom)',
    size: '980 sqft',
    rooms: '2+1 Bedrooms',
    baths: '2 Bathrooms',
    carpark: '2 Bays',
    features: ['Kitchen Cabinets', 'Hood & Hob', 'Air Conditioners', 'Refrigerator', 'Home Shelter/Flexi Room', 'Branded Sanitaryware'],
    imageUrl: 'https://drive.google.com/thumbnail?id=11MEEPUfV4bBVzvPTG6bh6MQjlsx-SRRm&sz=w1000',
    description: 'Includes a dedicated multi-purpose flexible room that converts seamlessly into a home study suite or utility storage.'
  },
  {
    type: 'Type D (3 Bedroom)',
    size: '1,100 sqft',
    rooms: '3 Bedrooms',
    baths: '2 Bathrooms',
    carpark: '2 Bays',
    features: ['Full Kitchen Cabinetry', 'Hood & Hob', 'Air Conditioners', 'Premium Refrigerator', 'Branded Sanitaryware', 'Yard Area'],
    imageUrl: 'https://drive.google.com/thumbnail?id=18VrwTYiHqbYBslVFhVEWUF0oFYw_ySJ1&sz=w1000',
    description: 'Generously proportioned family-sized apartments equipped with clear zoning of semi-private work and cooking spaces.'
  },
  {
    type: 'Type E (3+1 Bedroom)',
    size: '1,321 sqft',
    rooms: '3+1 Bedrooms',
    baths: '3 Bathrooms',
    carpark: '2 Bays (Side-by-Side)',
    features: ['Premium Kitchen Cabinets', 'Premium Hood & Hob', 'Multi-room Air Conditioners', 'Dual-Door Refrigerator', 'Luxury Branded Bathroom Fittings', 'Spacious Maid/Utility Room'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1-lf_OLm5kQBwPtQqUbmzm0eh8ZJymZBE&sz=w1000',
    description: 'The ultimate signature layout layout. Features generous modern spaces with dedicated helper quarters and deep panoramic balconies.'
  },
  {
    type: 'Type F (4 Bedroom)',
    size: '1,400 sqft',
    rooms: '4 Bedrooms',
    baths: '3 Bathrooms',
    carpark: '2-3 Bays',
    features: ['Premium Kitchen Cabinets', 'Premium Hood & Hob', 'Multi-room Air Conditioners', 'Dual-Door Refrigerator', 'Luxury Fittings', 'Maid Room'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1pIoYJsv6LMB6RriAgHQzRhwgThZu73Xe&sz=w1000',
    description: 'Spacious 4-bedroom executive suite designed for growing modern multi-generational families with clear ventilation views.'
  },
  {
    type: 'Type G (4 Bed Dual-Key)',
    size: '1,480 sqft',
    rooms: '4 Bedrooms',
    baths: '4 Bathrooms',
    carpark: '2-3 Bays',
    features: ['Dual-Key Entry Foster', 'Separate Studio Unit', 'Full Kitchen Cabinets', 'Multiple Air Conditioners', 'Multi-tier Security Access'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1OMF4wB3KxreTQHn3vVjmSvvF82d_evNE&sz=w1000',
    description: 'Versatile dual-key design configured with a separate self-contained studio flatlet perfect for independent living/in-laws or rental income.'
  },
  {
    type: 'Type H (4+1 Bed Dual-Key)',
    size: '1,550 sqft',
    rooms: '4+1 Bedrooms',
    baths: '4 Bathrooms',
    carpark: '3 Bays',
    features: ['Dual-Key Architecture', 'Helper Quarters', 'Granite Kitchen Island', 'Luxury Sanitary Fittings', 'Double-glazed Living Glass'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1gcHT-stSNtc9VevYgVOEDfiTUMc1SGPL&sz=w1000',
    description: 'Premium massive dual-key residence featuring separate entry configurations alongside dedicated housemaid suites and premium private foyers.'
  },
  {
    type: 'Type I (4+1 Bed Executive)',
    size: '1,620 sqft',
    rooms: '4+1 Bedrooms',
    baths: '4 Bathrooms',
    carpark: '3 Bays (Side-by-Side)',
    features: ['Panoramic Corner View', 'Luxury Wet & Dry Kitchen', 'Ductless Multi-Splits Aircon', 'Dual Master Suites', 'Private Entrance Lobby'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1sFXtfoA7pK4p87tBNfbunhJf39KmHV6A&sz=w1000',
    description: 'Ultra-spacious corner luxury design containing multiple master bedroom modules and direct high-performance gourmet wet & dry cooking zones.'
  },
  {
    type: 'Type J (5 Bed Penthouse)',
    size: '1,700 sqft',
    rooms: '5 Bedrooms',
    baths: '5 Bathrooms',
    carpark: '3-4 Bays',
    features: ['Sky Villa Penthouse Layout', 'Direct Horizon Views', 'Luxury Fitted Bathrooms', 'Premium Wardrobes', 'Home Automation Hub'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1kX9pZxSSTQRKS4JVoFJ2U5tYLaDNH_Rg&sz=w1000',
    description: 'Sky-mansion style penthouse layout offering generous social dining areas, panoramic master suites, and bespoke design finishes.'
  },
  {
    type: 'Type K (5+1 Bed Penthouse)',
    size: '1,820 sqft',
    rooms: '5+1 Bedrooms',
    baths: '5 Bathrooms',
    carpark: '4 Bays',
    features: ['Exclusive Top-floor Residence', 'Double Volume High Ceilings', 'Full Smart Home Access', 'Gourmet Kitchen Island', 'Maid Quarters'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1teNpZQnI2RoNxzI9SrB9KLCiEcsjfvWU&sz=w1000',
    description: 'Stately high-floor sky villa. Contains double height living walls, integrated air recycling flow, and massive floor-to-ceiling panoramic glass.'
  },
  {
    type: 'Type L (Grand Family Penthouse)',
    size: '1,950 sqft',
    rooms: '5+1 Bedrooms',
    baths: '5 Bathrooms',
    carpark: '4 Bays (Private Hub)',
    features: ['Ultimate Penthouse Prestige', 'Wrap-around Balcony', 'Imported European Appliances', 'Fully Ducted Central AC', 'Private Foyer Lobby'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1ig2BIXn7cLDus_-6I3Bhij0vbhCmQFAn&sz=w1000',
    description: 'Oversized flagship model with beautiful wrap-around glass terraces, imported timber cabinetry, and smart card private elevator access.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'Exterior',
    title: 'Iconic Tower Facade',
    description: 'The towering, majestic structural elegance of Khaya Residences standing high in Central Bangsar.',
    imageUrl: 'https://drive.google.com/thumbnail?id=15uAp2Za2-FIe1s7RYEX3IYpg1UPpN1DN&sz=w1200'
  },
  {
    id: 'gal-2',
    category: 'Exterior',
    title: 'Grand Elevated Front View',
    description: 'Sophisticated modern double-height tower perspective and pristine driveway clearance.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1GqwIgJ8VA2TeaI7tu2AzYscTmuPVRKQp&sz=w1200'
  },
  {
    id: 'gal-3',
    category: 'Facilities',
    title: '50m Horizon Infinity Lap Pool',
    description: 'A striking Olympic-length reservoir offering stunning infinity views of the regional cityscapes.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1BGyaHMCMYvn6stvmufMqBvIBnFdVjZ-G&sz=w1200'
  },
  {
    id: 'gal-4',
    category: 'Facilities',
    title: 'High Altitude Fitness Gym',
    description: 'Top floor functional wellness hub equipped with state-of-the-art cardiovascular and strength machines.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1s7EtSGmhj9wKXRTjZ6POZkT9M7SHBlXs&sz=w1200'
  },
  {
    id: 'gal-5',
    category: 'Facilities',
    title: 'Twilight Reflexology Garden',
    description: 'Immaculately manicured green garden pathways designed for evening therapeutic pacing.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1zCBTPQqUrMLOnRQUHLGt0GHi3vkkYlw0&sz=w1200'
  },
  {
    id: 'gal-6',
    category: 'Exterior',
    title: 'Ariel Overlooking Perspective',
    description: 'A pristine vertical overlook of the entire high-rise and surrounding mature low-density Bangsar suburbs.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Bv_ywD707zUDhEfj8aixz_Gcb-pioZoP&sz=w1200'
  }
];

export const FACILITIES: FacilityItem[] = [
  { name: '50m Infinity Lap Pool', category: 'Aqua', description: 'Olympic-length horizon-view lap pool with shallow lounging deck.' },
  { name: 'Rooftop Panoramic Gym', category: 'Wellness', description: 'Fully-equipped double-height modern health zone on Tower peak.' },
  { name: 'Sensory Landscaped Garden', category: 'Nature', description: 'Verdant natural botanical path featuring native shade trees.' },
  { name: 'Zen Wellness Pavilion', category: 'Wellness', description: 'Tranquil open-air deck focused for outdoor yoga and morning meditation.' },
  { name: 'Sky Social Lounge', category: 'Social', description: 'Private luxury hosting space with panoramic sunset dining facilities.' },
  { name: 'Championship Basketball Court', category: 'Sports', description: 'Fully fenced, half-size regulation acrylic outdoor court.' },
  { name: 'Standard Pickleball Court', category: 'Sports', description: 'Dedicated court catering to the popular modern community racket sport.' },
  { name: 'Interactive Kids Club', category: 'Family', description: 'Climb-safe active indoor playroom alongside an outdoor dry playground.' },
  { name: 'Integrated Retail Podium', category: 'Convenience', description: 'Managed boutique retail arcade for curated retail support.' }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Khaya Residences Bangsar?',
    answer: 'Khaya Residences (also known as Khaya Tree Bangsar) is a premium serviced residence development strategically placed along Jalan Bangsar. It features a single 61-storey tower consisting of 795 residential suites and a curated boutique retail podium.'
  },
  {
    id: 'faq-2',
    question: 'Where is Khaya Residences located?',
    answer: 'It is highly strategically situated along Jalan Bangsar in Kuala Lumpur, immediately bridging the established municipal triangle of Bangsar, Mid Valley City, and Kuala Lumpur Sentral. It places residents directly within a highly connectivity-focused central transit district.'
  },
  {
    id: 'faq-3',
    question: 'Who is the developer and landowner of the project?',
    answer: 'The project is developed by the Melati Ehsan Group, an established community builder, on prime private real estate owned by Tenaga Nasional Berhad (TNB).'
  },
  {
    id: 'faq-4',
    question: 'How far is Khaya Residences from the nearest transit hubs?',
    answer: 'The development lies within comfortable walking distance (approximately 400 meters or 6 minutes walk) from the Abdullah Hukum LRT & KTM Station. This station links directly to KL Eco City and is just 1 LRT stop away from KL Sentral, which is only 2.5km away.'
  },
  {
    id: 'faq-5',
    question: 'What are the available layout choices and sizes?',
    answer: 'We offer five meticulously planned layout designations: Type A (1 Bedroom, 630 sqft), Type B (2 Bedroom, 772 sqft), Type C (2+1 Bedroom, 980 sqft), Type D (3 Bedroom, 1,100 sqft), and Type E (3+1 Bedroom, 1,321 sqft).'
  },
  {
    id: 'faq-6',
    question: 'What amenities are included in selected units?',
    answer: 'Premium units come exceptionally appointed with high-tier built-in features including customized overhead kitchen cabinets, premium cooker hood & hob, inverter air conditioning units, household refrigerator, and luxury branded bathroom sanitary fittings.'
  },
  {
    id: 'faq-7',
    question: 'Who is this development primarily suitable for?',
    answer: 'Due to its strategic proximity to elite corporate districts, transportation junctions, and premium lifestyle amenities, the project represents an ideal residential opportunity for upwardly-mobile young professionals, double-income-no-kids (DINK) couples, regional expatriates, and medical tourism buyers seeking convenient urban accessibility.'
  },
  {
    id: 'faq-8',
    question: 'Are there guarantees regarding rental yields or investments?',
    answer: 'No. In absolute congruence with transparent ethical advertising and advertising guidelines, all material indicators are provided purely for educational reference. We do not provide, promise, or assure guaranteed appreciating values, guaranteed financial returns, or set rental outcomes. Interested buyers are strongly encouraged to undertake independent market analyses and consult our certified agent representatives.'
  }
];

// Rich SEO Structured Data (JSON-LD templates)
export const SCHEMAS = {
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Khaya Residences Bangsar',
    'url': 'https://www.khayaresidencesbangsar.com',
    'description': 'Explore Khaya Residences Bangsar, a modern serviced residence strategically located between Bangsar, Mid Valley and KL Sentral. Developed by Melati Ehsan Group on TNB Land.'
  },
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListingService',
    'name': 'Khaya Residences Private Advisory - Shyan Yee Ren (REN 46305)',
    'image': 'https://www.khayaresidencesbangsar.com/logo.jpg',
    'telephone': '+60195598932',
    'email': 'shyanyeews@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Jalan Bangsar',
      'addressLocality': 'Kuala Lumpur',
      'postalCode': '59200',
      'addressCountry': 'MY'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 3.1205,
      'longitude': 101.6789
    },
    'url': 'https://www.khayaresidencesbangsar.com'
  },
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.khayaresidencesbangsar.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Project Overview',
        'item': 'https://www.khayaresidencesbangsar.com#overview'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Floor Layouts',
        'item': 'https://www.khayaresidencesbangsar.com#layouts'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Contact Consultation',
        'item': 'https://www.khayaresidencesbangsar.com#contact'
      }
    ]
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQS.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  },
  propertyListing: {
    '@context': 'https://schema.org',
    '@type': 'RealEstateProject',
    'name': 'Khaya Residences Bangsar',
    'description': 'Luxury serviced apartments in Jalan Bangsar, Kuala Lumpur near Mid Valley & KL Sentral.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Jalan Bangsar',
      'addressLocality': 'Bangsar, Kuala Lumpur',
      'postalCode': '59200',
      'addressCountry': 'MY'
    },
    'containedInPlace': {
      '@type': 'Place',
      'name': 'Kuala Lumpur'
    },
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'MYR',
      'offeredBy': {
        '@type': 'RealEstateAgent',
        'name': 'Shyan Yee (IQI REALTY SDN. BHD.)',
        'telephone': '+60195598932'
      }
    }
  }
};
