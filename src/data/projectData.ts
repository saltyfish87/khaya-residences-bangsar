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
    type: 'Type A (1+1 Bedroom)',
    size: '772 sqft',
    rooms: '1+1 Bedrooms',
    baths: '1 Bathroom',
    carpark: '1 Bay',
    features: ['Kitchen Cabinets', 'Hood & Hob', 'Air Conditioners', 'Private Balcony', 'Branded Sanitaryware'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1KmHUekij4IxMibN1QDW1gN7BroOGXYH_&sz=w1000',
    description: 'A larger compact home with balcony space for natural ventilation, suited to expatriates and owner-occupiers who want more living flexibility.'
  },
  {
    type: 'Type B (1 Bedroom)',
    size: '630 sqft',
    rooms: '1 Bedroom',
    baths: '1 Bathroom',
    carpark: '1 Bay',
    features: ['Kitchen Cabinets', 'Hood & Hob', 'Air Conditioners', 'Branded Sanitaryware'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1fZA5DP_fgSliYqNhCrfiKnKKD4ukSp3D&sz=w1000',
    description: 'Efficient 1-bedroom planning for first-home buyers, singles, frequent travellers and rental-focused Bangsar investors.'
  },
  {
    type: 'Type C (1+1 Bedroom)',
    size: '683 sqft',
    rooms: '1+1 Bedrooms',
    baths: '1 Bathroom',
    carpark: '1 Bay',
    features: ['Kitchen Cabinets', 'Hood & Hob', 'Air Conditioners', 'Flexible Utility Zone', 'Branded Sanitaryware'],
    imageUrl: 'https://drive.google.com/thumbnail?id=11MEEPUfV4bBVzvPTG6bh6MQjlsx-SRRm&sz=w1000',
    description: 'The +1 room works naturally as a home office, guest room or flexible storage zone for hybrid professionals.'
  },
  {
    type: 'Type D (2 Bedroom)',
    size: '869 sqft',
    rooms: '2 Bedrooms',
    baths: '2 Bathrooms',
    carpark: '1-2 Bays',
    features: ['Kitchen Cabinets', 'Hood & Hob', 'Air Conditioners', 'Refrigerator', 'Branded Sanitaryware'],
    imageUrl: 'https://drive.google.com/thumbnail?id=18VrwTYiHqbYBslVFhVEWUF0oFYw_ySJ1&sz=w1000',
    description: 'A practical 2-bedroom, 2-bathroom layout for couples, small households and buyers who need better privacy.'
  },
  {
    type: 'Type E (2+1 Bedroom)',
    size: '998 sqft',
    rooms: '2+1 Bedrooms',
    baths: '2 Bathrooms',
    carpark: '1-2 Bays',
    features: ['Kitchen Cabinets', 'Hood & Hob', 'Air Conditioners', 'Refrigerator', 'Private Balcony', 'Branded Sanitaryware'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1-lf_OLm5kQBwPtQqUbmzm0eh8ZJymZBE&sz=w1000',
    description: 'A family-friendly plan with a +1 room that can support a nursery, study, helper room or hobby space.'
  },
  {
    type: 'Type F (2+1 Bedroom)',
    size: '1,032 sqft',
    rooms: '2+1 Bedrooms',
    baths: '2 Bathrooms',
    carpark: '2 Bays',
    features: ['Full Kitchen Cabinetry', 'Hood & Hob', 'Air Conditioners', 'Premium Refrigerator', 'Branded Sanitaryware', 'Yard Area'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1pIoYJsv6LMB6RriAgHQzRhwgThZu73Xe&sz=w1000',
    description: 'A larger 2+1 layout with stronger family function, giving owner-occupiers more flexibility for a study, child room or helper zone.'
  },
  {
    type: 'Type G (3 Bedroom)',
    size: '1,086 sqft',
    rooms: '3 Bedrooms',
    baths: '3 Bathrooms',
    carpark: '2 Bays',
    features: ['Premium Kitchen Cabinets', 'Premium Hood & Hob', 'Multi-room Air Conditioners', 'Dual-Door Refrigerator', 'Luxury Branded Bathroom Fittings', 'Spacious Maid/Utility Room'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1OMF4wB3KxreTQHn3vVjmSvvF82d_evNE&sz=w1000',
    description: 'A true family layout where every bedroom has nearby bathroom access, useful for upgraders and multi-person households.'
  },
  {
    type: 'Type H (2+2 Bedroom)',
    size: '1,028 sqft',
    rooms: '2+2 Bedrooms',
    baths: '2 Bathrooms',
    carpark: '2 Bays',
    features: ['Dual-Key Entry Foyer', 'Separate Studio Option', 'Full Kitchen Cabinets', 'Multiple Air Conditioners', 'Multi-tier Security Access'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1gcHT-stSNtc9VevYgVOEDfiTUMc1SGPL&sz=w1000',
    description: 'A flexible premium layout that suits families and work-from-home buyers who want extra rooms without moving into the largest unit types.'
  },
  {
    type: 'Type I (1+1 Bedroom)',
    size: '1,096 sqft',
    rooms: '1+1 Bedrooms',
    baths: '2 Bathrooms',
    carpark: '2 Bays',
    features: ['Premium Kitchen Cabinets', 'Premium Hood & Hob', 'Multi-room Air Conditioners', 'Dual-Door Refrigerator', 'Luxury Fittings', 'Maid Room'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1sFXtfoA7pK4p87tBNfbunhJf39KmHV6A&sz=w1000',
    description: 'A wider 1+1-bedroom plan for buyers who want generous living proportions, flexible study space and two-bathroom practicality.'
  },
  {
    type: 'Type J (2 Bedroom)',
    size: '1,070 sqft',
    rooms: '2 Bedrooms',
    baths: '2 Bathrooms',
    carpark: '2 Bays',
    features: ['Dual-Key Architecture', 'Helper Quarters', 'Granite Kitchen Island', 'Luxury Sanitary Fittings', 'Double-glazed Living Glass'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1kX9pZxSSTQRKS4JVoFJ2U5tYLaDNH_Rg&sz=w1000',
    description: 'A larger hosting-friendly layout with a luxury bathroom feature and expansive dining space.'
  },
  {
    type: 'Type K (3+1 Bedroom)',
    size: '1,164 sqft',
    rooms: '3+1 Bedrooms',
    baths: '2 Bathrooms',
    carpark: '2 Bays',
    features: ['Panoramic Corner View', 'Luxury Wet & Dry Kitchen', 'Ductless Multi-Splits Aircon', 'Dual Master Suites', 'Private Entrance Lobby'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1teNpZQnI2RoNxzI9SrB9KLCiEcsjfvWU&sz=w1000',
    description: 'A spacious home with utility flexibility, suited to larger families and residents who need helper or storage space.'
  },
  {
    type: 'Type L (3 Bedroom)',
    size: '1,321 sqft',
    rooms: '3 Bedrooms',
    baths: '3 Bathrooms',
    carpark: '2 Bays (Side-by-Side)',
    features: ['Ultimate Prestige Layout', 'Wrap-around Balcony', 'Imported European Appliances', 'Fully Ducted Central AC', 'Private Foyer Lobby'],
    imageUrl: 'https://drive.google.com/thumbnail?id=1ig2BIXn7cLDus_-6I3Bhij0vbhCmQFAn&sz=w1000',
    description: 'The signature large layout with stronger spatial proportion, premium bathroom comfort and broad family appeal.'
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
    imageUrl: 'https://assets.cdn.filesafe.space/lACwR9t89exHjDBEit6g/media/6a2281cb49e55f85196e75ef.webp'
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
    question: 'What is the tenure of Khaya Residences?',
    answer: 'Khaya Residences is a 99-Year Leasehold serviced residence, offering stable, high-end long-term living built on prime TNB-owned land under a prestigious joint development.'
  },
  {
    id: 'faq-2',
    question: 'When is the expected completion of the project?',
    answer: 'The estimated completion date for Khaya Residences is Q2 2029, giving buyers ample time for progressive payment and financial planning.'
  },
  {
    id: 'faq-3',
    question: 'Is Khaya Residences freehold or leasehold?',
    answer: 'It is a 99-Year Leasehold development. It is built in cooperation with Tenaga Nasional Berhad (TNB) as the landowner, ensuring high security, compliance, and institutional-grade planning.'
  },
  {
    id: 'faq-4',
    question: 'What is Khaya Residences Bangsar?',
    answer: 'Khaya Residences (also known as Khaya Tree Residences or Khaya Tree Residence) is a premium, single-block 61-storey serviced apartment development consisting of 795 luxury residential suites and a curated boutique retail podium.'
  },
  {
    id: 'faq-5',
    question: 'Where is Khaya Residences located?',
    answer: 'It is strategically situated along Jalan Bangsar in Kuala Lumpur, immediately bridging the highly sought-after transit and commercial zones of Bangsar, Mid Valley City, and Kuala Lumpur Sentral.'
  },
  {
    id: 'faq-6',
    question: 'Who is the developer of the project?',
    answer: 'The project is developed by the highly reputable Melati Ehsan Group, an established community builder in Malaysia known for deliverable excellence.'
  },
  {
    id: 'faq-7',
    question: 'How far is Khaya Residences from the nearest transit hubs?',
    answer: 'The development is located just approximately 400 meters (about a 6-minute walk) from the Abdullah Hukum LRT & KTM Station. It is also just 1 LRT stop away from the major KL Sentral transportation hub.'
  },
  {
    id: 'faq-8',
    question: 'What are the available layout choices and sizes?',
    answer: 'We offer twelve meticulously planned layouts (Types A to L), with built-up sizes ranging from 630 to 1,321 sqft. Key options include Type B (1 Bed, 630 sqft), Type C (1+1 Beds, 683 sqft), Type A (1+1 Beds, 772 sqft), Type D (2 Beds, 869 sqft), Type E (2+1 Beds, 998 sqft), and Type L (3 Beds, 1,321 sqft).'
  },
  {
    id: 'faq-9',
    question: 'What premium fittings are included in selected units?',
    answer: 'Premium units come exceptionally appointed with high-tier built-in features including customized kitchen cabinets, premium cooker hood and hob, energy-saving inverter air conditioning units, household refrigerator, and luxury branded sanitary fittings.'
  },
  {
    id: 'faq-10',
    question: 'Who is this development primarily suitable for?',
    answer: 'It is ideal for young professionals, growing families, corporate executives, and real estate investors looking for high capital appreciation and strong rental demand near major commercial hubs like Mid Valley and KL Sentral.'
  }
];

// Rich SEO Structured Data (JSON-LD templates)
export const SCHEMAS = {
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Khaya Residences Bangsar',
    'url': 'https://www.khaya-residence.my',
    'description': 'Explore Khaya Residences Bangsar, a modern serviced residence strategically located between Bangsar, Mid Valley and KL Sentral. Developed by Melati Ehsan Group on TNB Land.'
  },
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    'name': 'Yee Woei Shyan (Shyan Yee), REN 46305 – IQI Realty Sdn Bhd',
    'alternateName': 'Khaya Residences Private Advisory',
    'identifier': 'REN 46305',
    'parentOrganization': { '@type': 'Organization', 'name': 'IQI Realty Sdn Bhd' },
    'sameAs': ['https://maps.google.com/?cid=3195643739952877602', 'https://www.youtube.com/@shyanyee', 'https://www.instagram.com/shyanyee/', 'https://www.facebook.com/shyanyeeconsultant/', 'https://wa.me/60108278932'],
    'image': 'https://www.khaya-residence.my/logo.jpg',
    'telephone': '+60108278932',
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
    'url': 'https://www.khaya-residence.my'
  },
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.khaya-residence.my'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Project Overview',
        'item': 'https://www.khaya-residence.my#overview'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Floor Layouts',
        'item': 'https://www.khaya-residence.my#layouts'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Contact Consultation',
        'item': 'https://www.khaya-residence.my#contact'
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
    '@type': 'ApartmentComplex',
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
    'url': 'https://www.khaya-residence.my',
    'numberOfAccommodationUnits': 795,
    'floorSize': { '@type': 'QuantitativeValue', 'minValue': 630, 'maxValue': 1321, 'unitCode': 'FTK' },
    'additionalProperty': [
      { '@type': 'PropertyValue', 'name': 'Developer', 'value': 'Melati Ehsan Group' },
      { '@type': 'PropertyValue', 'name': 'Landowner', 'value': 'Tenaga Nasional Berhad' },
      { '@type': 'PropertyValue', 'name': 'Tenure', 'value': '99-Year Leasehold' },
      { '@type': 'PropertyValue', 'name': 'Land title', 'value': 'Commercial under HDA' },
      { '@type': 'PropertyValue', 'name': 'Configuration', 'value': '1 tower, 61 storeys' },
      { '@type': 'PropertyValue', 'name': 'Estimated completion', 'value': 'Q2 2029' }
    ],
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'MYR',
      'lowPrice': '650000',
      'offeredBy': {
        '@type': 'RealEstateAgent',
        'name': 'Shyan Yee (IQI REALTY SDN. BHD.)',
        'telephone': '+60108278932'
      }
    }
  },
  realEstateListing: {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    'name': 'Khaya Residences Bangsar (Khaya Tree Residences) Serviced Apartment for Sale',
    'url': 'https://www.khaya-residence.my',
    'description': 'Direct developer pricing for Khaya Residences (Khaya Tree Residences) Bangsar. Explore floor layouts, strategic connectivity to Mid Valley and KL Sentral, and secure your private viewing consultation with registered agent Shyan Yee.',
    'datePosted': '2026-06-27',
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'MYR',
      'price': '650000',
      'priceSpecification': {
        '@type': 'UnitPriceSpecification',
        'price': '650000',
        'priceCurrency': 'MYR',
        'referenceQuantity': {
          '@type': 'QuantitativeValue',
          'value': 1,
          'unitCode': 'C62'
        }
      },
      'offeredBy': {
        '@type': 'RealEstateAgent',
        'name': 'Shyan Yee (IQI REALTY SDN. BHD.)',
        'telephone': '+60108278932',
        'url': 'https://www.khaya-residence.my'
      }
    }
  }
};
